/**
 * AMC 2026 Speakers — popup injector
 * Preloads all speakers from #speaker-json-data on page load.
 *
 * LinkedIn button: add class pop-speaker-linkedin on the Button widget (sets href on the <a> inside; hidden if empty).
 */

(function () {
  var PENDING_ID = null;
  var DELAY_MS = 100;
  var speakersCache = null;

  function normalizeSpeakers(raw) {
    if (!raw || Array.isArray(raw)) return {};
    return raw;
  }

  function getSpeakersFromDom() {
    var dataEl = document.getElementById('speaker-json-data');
    if (!dataEl) return null;
    try {
      return normalizeSpeakers(JSON.parse(dataEl.textContent || '{}'));
    } catch (err) {
      console.error('ERROR: Failed to parse #speaker-json-data', err);
      return null;
    }
  }

  function loadSpeakers() {
    if (speakersCache) return Promise.resolve(speakersCache);

    var dom = getSpeakersFromDom();
    if (dom && Object.keys(dom).length) {
      speakersCache = dom;
      return Promise.resolve(dom);
    }

    console.error('ERROR: #speaker-json-data missing or empty. Check PHP snippet + clear cache.');
    speakersCache = {};
    return Promise.resolve({});
  }

  function preloadSpeakers() {
    return loadSpeakers().then(function (speakers) {
      var keys = Object.keys(speakers);
      console.log('Speakers preloaded:', keys.length, speakers);
      if (keys.length) {
        var s = speakers[keys[0]];
        console.log('Sample speaker fields:', {
          id: keys[0],
          name: s.name,
          bioLen: (s.bio || '').length,
          session: s.session,
          job_title: s.job_title,
        });
      }
      return speakers;
    });
  }

  function getLoopPostId(el) {
    var loop = el && el.closest ? el.closest('.e-loop-item') : null;
    if (!loop) return null;
    var m =
      loop.className.match(/\bpost-(\d+)\b/) ||
      loop.className.match(/\be-loop-item-(\d+)\b/);
    return m ? m[1] : null;
  }

  function isElementorPopupTrigger(el) {
    var href = el.getAttribute && el.getAttribute('href');
    return href && (href.indexOf('elementor-action') !== -1 || href.indexOf('popup:open') !== -1);
  }

  function findTrigger(start) {
    if (!start || !start.closest) return null;
    var explicit = start.closest('.open-speaker-modal');
    if (explicit) return explicit;
    var btn = start.closest('a, button, .elementor-button');
    if (btn && isElementorPopupTrigger(btn)) return btn;
    if (btn && btn.closest('.e-loop-item')) return btn;
    return null;
  }

  function getSpeakerIdFromTrigger(trigger) {
    if (!trigger) return null;
    return trigger.getAttribute('data-speaker-id') || getLoopPostId(trigger);
  }

  function fillField(cssClasses, value, asHtml) {
    var total = 0;
    cssClasses.forEach(function (cssClass) {
      document.querySelectorAll('.' + cssClass).forEach(function (root) {
        total++;
        var editor = root.querySelector('.elementor-text-editor');
        if (editor) {
          if (asHtml) editor.innerHTML = value || '';
          else editor.textContent = value || '';
          return;
        }
        var heading = root.querySelector('.elementor-heading-title');
        if (heading) {
          heading.textContent = value || '';
          return;
        }
        var container = root.querySelector('.elementor-widget-container');
        if (container) {
          if (asHtml) container.innerHTML = value || '';
          else container.textContent = value || '';
          return;
        }
        if (asHtml) root.innerHTML = value || '';
        else root.textContent = value || '';
      });
    });
    return total;
  }

  function fillImage(cssClass, src, alt) {
    document.querySelectorAll('.' + cssClass + ' img').forEach(function (img) {
      img.src = src || '';
      img.alt = alt || '';
      if (img.hasAttribute('srcset')) img.removeAttribute('srcset');
    });
  }

  /** LinkedIn / URL button — class on Button widget; targets <a> inside */
  function fillLink(cssClasses, href) {
    var total = 0;
    var url = (href || '').trim();
    cssClasses.forEach(function (cssClass) {
      document.querySelectorAll('.' + cssClass).forEach(function (root) {
        total++;
        var link = root.matches('a') ? root : root.querySelector('a');
        if (!link) return;
        if (url) {
          link.href = url;
          link.style.display = '';
          root.style.display = '';
        } else {
          link.href = '#';
          root.style.display = 'none';
        }
      });
    });
    return total;
  }

  function injectSpeaker(speakerId) {
    loadSpeakers().then(function (speakers) {
      var keys = Object.keys(speakers);
      if (!keys.length) return;

      var speaker = speakers[speakerId] || speakers[String(speakerId)];
      if (!speaker) {
        console.error('ERROR: ID ' + speakerId + ' not found. Available:', keys);
        return;
      }

      console.log('Injecting:', {
        id: speakerId,
        name: speaker.name,
        bioLen: (speaker.bio || '').length,
        job_title: speaker.job_title,
        position: speaker.position,
        session: speaker.session,
      });

      if (!(speaker.bio || speaker.session || speaker.job_title)) {
        console.warn(
          'Bio/session empty in JSON for this speaker. Check WP Admin fields are saved, then view source for speaker-acf-keys comment.'
        );
      }

      var counts = {
        name: fillField(['pop-speaker-name'], speaker.name || '', false),
        bio: fillField(['pop-speaker-bio'], speaker.bio || '', true),
        job_title: fillField(['pop-speaker-job-title', 'pop-speaker-title'], speaker.job_title || '', false),
        position: fillField(['pop-speaker-position'], speaker.position || '', false),
        session: fillField(['pop-speaker-session', 'pop-speaker-session-title'], speaker.session || '', false),
      };
      fillImage('pop-speaker-image', speaker.image || '', speaker.name || '');
      counts.linkedin = fillLink(['pop-speaker-linkedin'], speaker.linkedin || '');

      console.log('SUCCESS:', speaker.name, '| nodes:', counts);
    });
  }

  function scheduleInject(speakerId) {
    PENDING_ID = speakerId;
    [DELAY_MS, 250, 500, 900].forEach(function (ms) {
      setTimeout(function () {
        if (PENDING_ID === speakerId) injectSpeaker(speakerId);
      }, ms);
    });
  }

  document.addEventListener(
    'click',
    function (e) {
      var trigger = findTrigger(e.target);
      if (!trigger) return;
      var speakerId = getSpeakerIdFromTrigger(trigger);
      if (!speakerId) return;
      scheduleInject(speakerId);
    },
    true
  );

  function onPopupShow() {
    if (!PENDING_ID) return;
    setTimeout(function () {
      injectSpeaker(PENDING_ID);
    }, DELAY_MS);
  }

  document.addEventListener('elementor/popup/show', onPopupShow);
  if (typeof jQuery !== 'undefined') {
    jQuery(document).on('elementor/popup/show', onPopupShow);
  }

  // Preload all speakers as soon as footer JSON is in the DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadSpeakers);
  } else {
    preloadSpeakers();
  }
})();

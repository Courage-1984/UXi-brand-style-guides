/**
 * Speaker ACF Popup System — White-label JS template
 *
 * Add these classes in Elementor:
 * - Trigger: open-speaker-modal
 * - Optional attribute: data-speaker-id = Post ID
 * - Popup button for LinkedIn: pop-speaker-linkedin
 */

const SPEAKER_POPUP_CONFIG = {
  triggerClass: 'open-speaker-modal',
  dataAttr: 'data-speaker-id',
  jsonScriptId: 'speaker-json-data',
  popupReadyDelay: 100,
  debug: true,
};

(function () {
  let pendingId = null;
  let speakersCache = null;

  function getSpeakersFromDom() {
    const dataEl = document.getElementById(SPEAKER_POPUP_CONFIG.jsonScriptId);
    if (!dataEl) return null;
    try {
      const parsed = JSON.parse(dataEl.textContent || '{}');
      return parsed && !Array.isArray(parsed) ? parsed : {};
    } catch (err) {
      console.error('ERROR: Failed to parse popup JSON.', err);
      return null;
    }
  }

  function loadSpeakers() {
    if (speakersCache) return Promise.resolve(speakersCache);
    const dom = getSpeakersFromDom();
    if (dom && Object.keys(dom).length) {
      speakersCache = dom;
      return Promise.resolve(dom);
    }
    console.error('ERROR: #' + SPEAKER_POPUP_CONFIG.jsonScriptId + ' missing or empty.');
    speakersCache = {};
    return Promise.resolve({});
  }

  function preloadSpeakers() {
    return loadSpeakers().then(function (speakers) {
      if (SPEAKER_POPUP_CONFIG.debug) {
        console.log('Speakers preloaded:', Object.keys(speakers).length, speakers);
      }
      return speakers;
    });
  }

  function getLoopPostId(el) {
    const loop = el && el.closest ? el.closest('.e-loop-item') : null;
    if (!loop) return null;
    const match =
      loop.className.match(/\bpost-(\d+)\b/) ||
      loop.className.match(/\be-loop-item-(\d+)\b/);
    return match ? match[1] : null;
  }

  function isElementorPopupTrigger(el) {
    const href = el.getAttribute && el.getAttribute('href');
    return href && (href.includes('elementor-action') || href.includes('popup:open'));
  }

  function findTrigger(start) {
    if (!start || !start.closest) return null;
    const explicit = start.closest('.' + SPEAKER_POPUP_CONFIG.triggerClass);
    if (explicit) return explicit;
    const btn = start.closest('a, button, .elementor-button');
    if (btn && isElementorPopupTrigger(btn)) return btn;
    if (btn && btn.closest('.e-loop-item')) return btn;
    return null;
  }

  function getSpeakerIdFromTrigger(trigger) {
    if (!trigger) return null;
    return trigger.getAttribute(SPEAKER_POPUP_CONFIG.dataAttr) || getLoopPostId(trigger);
  }

  function fillField(cssClasses, value, asHtml) {
    let total = 0;
    cssClasses.forEach(function (cssClass) {
      document.querySelectorAll('.' + cssClass).forEach(function (root) {
        total++;
        const editor = root.querySelector('.elementor-text-editor');
        if (editor) {
          if (asHtml) editor.innerHTML = value || '';
          else editor.textContent = value || '';
          return;
        }
        const heading = root.querySelector('.elementor-heading-title');
        if (heading) {
          heading.textContent = value || '';
          return;
        }
        const container = root.querySelector('.elementor-widget-container');
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

  function fillLink(cssClasses, href) {
    let total = 0;
    const url = (href || '').trim();
    cssClasses.forEach(function (cssClass) {
      document.querySelectorAll('.' + cssClass).forEach(function (root) {
        total++;
        const link = root.matches('a') ? root : root.querySelector('a');
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
      const speaker = speakers[speakerId] || speakers[String(speakerId)];
      if (!speaker) {
        console.error('ERROR: Speaker ID ' + speakerId + ' not found.');
        return;
      }

      const counts = {
        image: 1,
        full_name: fillField(['pop-speaker-full-name'], speaker.full_name || '', false),
        name: fillField(['pop-speaker-name'], speaker.name || '', false),
        surname: fillField(['pop-speaker-surname'], speaker.surname || '', false),
        title: fillField(['pop-speaker-title', 'pop-speaker-job-title'], speaker.title || '', false),
        qualification: fillField(['pop-speaker-qualification'], speaker.qualification || '', false),
        position: fillField(['pop-speaker-position'], speaker.position || '', false),
        bio: fillField(['pop-speaker-bio'], speaker.bio || '', true),
        quote: fillField(['pop-speaker-quote'], speaker.quote || '', true),
        session: fillField(['pop-speaker-session', 'pop-speaker-session-title'], speaker.session || '', false),
        linkedin: fillLink(['pop-speaker-linkedin'], speaker.linkedin || ''),
      };

      fillImage('pop-speaker-image', speaker.image || '', speaker.full_name || speaker.name || '');

      if (SPEAKER_POPUP_CONFIG.debug) {
        console.log('SUCCESS:', speaker.full_name || speaker.name || speakerId, '| nodes:', counts);
      }
    });
  }

  function scheduleInject(speakerId) {
    pendingId = speakerId;
    [SPEAKER_POPUP_CONFIG.popupReadyDelay, 250, 500, 900].forEach(function (ms) {
      setTimeout(function () {
        if (pendingId === speakerId) injectSpeaker(speakerId);
      }, ms);
    });
  }

  document.addEventListener(
    'click',
    function (e) {
      const trigger = findTrigger(e.target);
      if (!trigger) return;
      const speakerId = getSpeakerIdFromTrigger(trigger);
      if (!speakerId) return;
      scheduleInject(speakerId);
    },
    true
  );

  function onPopupShow() {
    if (!pendingId) return;
    setTimeout(function () {
      injectSpeaker(pendingId);
    }, SPEAKER_POPUP_CONFIG.popupReadyDelay);
  }

  document.addEventListener('elementor/popup/show', onPopupShow);
  if (typeof jQuery !== 'undefined') {
    jQuery(document).on('elementor/popup/show', onPopupShow);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadSpeakers);
  } else {
    preloadSpeakers();
  }
})();

(function () {
  'use strict';

  var GUIDES = [
    { slug: 'OWI-style-guide', label: 'Open Window Institute' },
    { slug: 'IMM-GS-style-guide', label: 'IMM Graduate School' },
    { slug: 'BCi-style-guide', label: 'Belgium Campus iTversity' },
    { slug: 'mPowered-style-guide', label: 'UXi mPowered' },
    { slug: 'ASCON-style-guide', label: 'ASCON' },
    { slug: 'TICON-Africa-style-guide', label: 'TICON Africa' },
    { slug: 'SAICTA-style-guide', label: 'SAICTA' }
  ];

  var BRAND_SLUGS = GUIDES.map(function (g) { return g.slug; });

  function getCurrentSlug() {
    var parts = window.location.pathname.split('/').filter(Boolean);
    for (var i = 0; i < parts.length; i++) {
      if (BRAND_SLUGS.indexOf(parts[i]) !== -1) {
        return parts[i];
      }
    }
    return null;
  }

  function getCalendarSlug() {
    var parts = window.location.pathname.split('/').filter(Boolean);
    for (var i = 0; i < parts.length - 1; i++) {
      if (parts[i] === 'Calendars') {
        return parts[i + 1];
      }
    }
    return null;
  }

  function getPathPrefix() {
    if (getCalendarSlug()) {
      return '../../';
    }
    if (getCurrentSlug()) {
      return '../';
    }
    return '';
  }

  function buildGuideUrl(slug) {
    return getPathPrefix() + slug + '/';
  }

  function buildIndexUrl() {
    var prefix = getPathPrefix();
    return prefix || './';
  }

  function isOnIndex() {
    return getCurrentSlug() === null && getCalendarSlug() === null;
  }

  function createSwitcher() {
    var current = getCurrentSlug();
    var onIndex = isOnIndex();
    var root = document.createElement('div');
    root.className = 'guide-switcher';
    root.setAttribute('role', 'navigation');
    root.setAttribute('aria-label', 'Switch style guide');

    var trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'guide-switcher-trigger';
    trigger.setAttribute('aria-label', 'Switch style guide');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-haspopup', 'true');
    trigger.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<rect x="3" y="3" width="7" height="7" rx="1"/>' +
      '<rect x="14" y="3" width="7" height="7" rx="1"/>' +
      '<rect x="3" y="14" width="7" height="7" rx="1"/>' +
      '<rect x="14" y="14" width="7" height="7" rx="1"/>' +
      '</svg>';

    var menu = document.createElement('ul');
    menu.className = 'guide-switcher-menu';
    menu.setAttribute('role', 'menu');

    var label = document.createElement('li');
    label.className = 'guide-switcher-menu-label';
    label.textContent = 'Style guides';
    label.setAttribute('role', 'presentation');
    menu.appendChild(label);

    var indexItem = document.createElement('li');
    indexItem.setAttribute('role', 'none');
    var indexLink = document.createElement('a');
    indexLink.href = buildIndexUrl();
    indexLink.textContent = 'UXi Index';
    indexLink.setAttribute('role', 'menuitem');
    if (onIndex) {
      indexLink.className = 'is-current';
      indexLink.setAttribute('aria-current', 'page');
    }
    indexItem.appendChild(indexLink);
    menu.appendChild(indexItem);

    var divider = document.createElement('li');
    divider.className = 'guide-switcher-menu-divider';
    divider.setAttribute('role', 'separator');
    menu.appendChild(divider);

    GUIDES.forEach(function (guide) {
      var item = document.createElement('li');
      item.setAttribute('role', 'none');
      var link = document.createElement('a');
      link.href = buildGuideUrl(guide.slug);
      link.textContent = guide.label;
      link.setAttribute('role', 'menuitem');
      if (guide.slug === current) {
        link.className = 'is-current';
        link.setAttribute('aria-current', 'page');
      }
      item.appendChild(link);
      menu.appendChild(item);
    });

    root.appendChild(menu);
    root.appendChild(trigger);

    function setOpen(open) {
      root.classList.toggle('is-open', open);
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(!root.classList.contains('is-open'));
    });

    document.addEventListener('click', function () {
      setOpen(false);
    });

    root.addEventListener('click', function (e) {
      e.stopPropagation();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        setOpen(false);
        trigger.focus();
      }
    });

    return root;
  }

  function init() {
    document.body.appendChild(createSwitcher());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

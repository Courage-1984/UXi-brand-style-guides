(function () {
  'use strict';

  var BRAND_SLUGS = [
    'OWI-style-guide',
    'IMM-GS-style-guide',
    'BCi-style-guide',
    'mPowered-style-guide',
    'ASCON-style-guide',
    'TICON-Africa-style-guide',
    'SAICTA-style-guide'
  ];

  var SIDEBAR_SELECTORS = [
    '#sidebar',
    '.ds-sidebar',
    '.sg-nav',
    '.sidebar'
  ];

  var CHEVRON =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<polyline points="15 18 9 12 15 6"/>' +
    '</svg>';

  var EDGE_OFFSET = 16;

  function getStyleGuideSlug() {
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

  function buildIndexUrl() {
    if (getCalendarSlug()) {
      return '../../';
    }
    if (getStyleGuideSlug()) {
      return '../';
    }
    return null;
  }

  function findSidebar() {
    var i;
    var el;

    for (i = 0; i < SIDEBAR_SELECTORS.length; i++) {
      el = document.querySelector(SIDEBAR_SELECTORS[i]);
      if (el) {
        return el;
      }
    }

    var asides = document.querySelectorAll('body > aside');
    for (i = 0; i < asides.length; i++) {
      el = asides[i];
      if (window.getComputedStyle(el).position === 'fixed') {
        return el;
      }
    }

    return null;
  }

  function getEdgeOffset() {
    return window.matchMedia('(max-width: 480px)').matches ? 14 : EDGE_OFFSET;
  }

  function updateBackPosition(root) {
    var sidebar = findSidebar();
    var left = getEdgeOffset();

    if (sidebar) {
      var rect = sidebar.getBoundingClientRect();
      if (rect.width > 0 && rect.right > 0 && rect.left >= 0) {
        left = Math.round(rect.right + getEdgeOffset());
      }
    }

    root.style.setProperty('--guide-back-left', left + 'px');
  }

  function createBackControl() {
    var indexUrl = buildIndexUrl();
    if (!indexUrl) {
      return null;
    }

    var root = document.createElement('nav');
    root.className = 'guide-back';
    root.setAttribute('aria-label', 'Back to index');

    var link = document.createElement('a');
    link.className = 'guide-resource-link';
    link.href = indexUrl;
    link.title = 'Back to UXi Index';
    link.innerHTML = CHEVRON + 'UXi Index';

    root.appendChild(link);
    return root;
  }

  function init() {
    var back = createBackControl();
    if (!back) {
      return;
    }

    document.body.appendChild(back);
    updateBackPosition(back);

    window.addEventListener('resize', function () {
      updateBackPosition(back);
    });

    if (window.ResizeObserver) {
      var sidebar = findSidebar();
      if (sidebar) {
        new ResizeObserver(function () {
          updateBackPosition(back);
        }).observe(sidebar);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

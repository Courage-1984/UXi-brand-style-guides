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

  var EXTERNAL_ICON =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>' +
    '<polyline points="15 3 21 3 21 9"/>' +
    '<line x1="10" y1="14" x2="21" y2="3"/>' +
    '</svg>';

  var BRAND_RESOURCES = {
    'IMM-GS-style-guide': [
      {
        label: 'Open Day',
        href: 'https://immopenday.co.za/',
        external: true,
        title: 'Open IMM open day platform in new tab'
      }
    ],
    'BCi-style-guide': [
      {
        label: 'Calendar',
        href: 'Calendars/BCi/',
        title: 'Open BCi calendar'
      },
      {
        label: 'Open Day',
        href: 'https://openday.belgiumcampus.ac.za/',
        external: true,
        title: 'Open BCi open day platform in new tab'
      }
    ]
  };

  var CALENDAR_RESOURCES = {
    'BCi': [
      {
        label: 'Style Guide',
        href: 'BCi-style-guide/',
        title: 'Open BCi style guide'
      },
      {
        label: 'Open Day',
        href: 'https://openday.belgiumcampus.ac.za/',
        external: true,
        title: 'Open BCi open day platform in new tab'
      }
    ],
    'OWU': [
      {
        label: 'Open Day',
        href: 'https://openday.owu.edu.zm/',
        external: true,
        title: 'Open OWU open day platform in new tab'
      }
    ]
  };

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

  function getPathPrefix() {
    if (getCalendarSlug()) {
      return '../../';
    }
    if (getStyleGuideSlug()) {
      return '../';
    }
    return '';
  }

  function buildResourceUrl(path) {
    return getPathPrefix() + path;
  }

  function getResources() {
    var guideSlug = getStyleGuideSlug();
    if (guideSlug && BRAND_RESOURCES[guideSlug]) {
      return BRAND_RESOURCES[guideSlug];
    }

    var calendarSlug = getCalendarSlug();
    if (calendarSlug && CALENDAR_RESOURCES[calendarSlug]) {
      return CALENDAR_RESOURCES[calendarSlug];
    }

    return null;
  }

  function createResources() {
    var resources = getResources();
    if (!resources) {
      return null;
    }

    var root = document.createElement('nav');
    root.className = 'guide-resources';
    root.setAttribute('aria-label', 'Related resources');

    resources.forEach(function (resource) {
      var link = document.createElement('a');
      link.className = 'guide-resource-link';
      link.href = resource.external ? resource.href : buildResourceUrl(resource.href);
      link.textContent = resource.label;
      link.title = resource.title || resource.label;

      if (resource.external) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.insertAdjacentHTML('afterbegin', EXTERNAL_ICON);
      }

      root.appendChild(link);
    });

    return root;
  }

  function init() {
    var resources = createResources();
    if (resources) {
      document.body.appendChild(resources);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

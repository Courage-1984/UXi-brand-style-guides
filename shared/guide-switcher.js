(function () {
  'use strict';

  var GUIDES = [
    { slug: 'OWI-style-guide', label: 'Open Window Institute' },
    { slug: 'IMM-GS-style-guide', label: 'IMM Graduate School' },
    { slug: 'BCi-style-guide', label: 'Belgium Campus iTversity' },
    { slug: 'mPowered-style-guide', label: 'UXi mPowered' }
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

  function buildGuideUrl(slug) {
    var current = getCurrentSlug();
    if (current) {
      return '../' + slug + '/';
    }
    return slug + '/';
  }

  function createSwitcher() {
    var current = getCurrentSlug();
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

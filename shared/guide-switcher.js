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

  var EXTERNAL_ICON =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>' +
    '<polyline points="15 3 21 3 21 9"/>' +
    '<line x1="10" y1="14" x2="21" y2="3"/>' +
    '</svg>';

  var SITE_LINKS = {
    'OWI-style-guide': [
      { href: 'https://ow.uxidevelopment.co.za/', label: 'Dev', title: 'Open OWI dev site in new tab' },
      { href: 'https://www.openwindow.co.za/', label: 'Live', title: 'Open OWI live site in new tab' },
      { href: 'https://community.openwindow.co.za/', label: 'Community', title: 'Open OWI community site in new tab' },
      { href: 'https://ow-sup.uxidevelopment.co.za/', label: 'Sup', title: 'Open OWI supplementary dev site in new tab' }
    ],
    'IMM-GS-style-guide': [
      { href: 'https://imm.uxidevelopment.co.za/', label: 'Dev', title: 'Open IMM dev site in new tab' },
      { href: 'https://imm.ac.za/', label: 'Live', title: 'Open IMM live site in new tab' }
    ],
    'BCi-style-guide': [
      { href: 'https://www.belgiumcampus.ac.za/', label: 'Site', title: 'Open Belgium Campus website in new tab' }
    ],
    'mPowered-style-guide': [
      { href: 'https://uxi-mpowered.co.za/', label: 'Site', title: 'Open UXi mPowered website in new tab' }
    ],
    'ASCON-style-guide': [
      { href: 'https://asconafrica.org/', label: 'Site', title: 'Open ASCON website in new tab' }
    ],
    'TICON-Africa-style-guide': [
      { href: 'https://ticonafrica.org/', label: 'Site', title: 'Open TICON Africa website in new tab' }
    ],
    'SAICTA-style-guide': [
      { href: 'https://www.saicta.org/', label: 'Site', title: 'Open SAICTA website in new tab' }
    ]
  };

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

  function buildIndexUrl() {
    return getCurrentSlug() ? '../' : './';
  }

  function isOnIndex() {
    return getCurrentSlug() === null;
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

  function createSiteLinks() {
    var current = getCurrentSlug();
    if (!current) {
      return null;
    }

    var links = SITE_LINKS[current];
    if (!links || !links.length) {
      return null;
    }

    var host = document.createElement('nav');
    host.className = 'guide-site-links-host';
    host.setAttribute('aria-label', 'Brand websites');

    links.forEach(function (item) {
      var link = document.createElement('a');
      link.className = 'guide-site-link';
      link.href = item.href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.title = item.title;
      link.innerHTML = EXTERNAL_ICON + item.label;
      host.appendChild(link);
    });

    return host;
  }

  function init() {
    document.body.appendChild(createSwitcher());
    var siteLinks = createSiteLinks();
    if (siteLinks) {
      document.body.appendChild(siteLinks);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

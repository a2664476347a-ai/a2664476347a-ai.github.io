(() => {
  const root = document.getElementById('personal-rankings');
  if (!root) return;

  const list = root.querySelector('#rankings-list');
  const tabs = [...root.querySelectorAll('[data-ranking-tab]')];
  if (!list) return;

  const dataUrl = '/data/rankings-auto.json';
  const labels = {
    movies: 'MOVIES',
    books: 'BOOKS',
    games: 'GAMES',
    anime: 'ANIME'
  };

  let rankings = { movies: [], books: [], games: [], anime: [] };
  let activeTab = 'movies';

  // Insert the category heading without requiring changes to the page template.
  let sectionHeading = root.querySelector('#rankings-section-heading');
  if (!sectionHeading) {
    sectionHeading = document.createElement('div');
    sectionHeading.id = 'rankings-section-heading';
    sectionHeading.className = 'rankings-section-heading';
    list.parentNode.insertBefore(sectionHeading, list);
  }

  const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));

  function render() {
    const entries = [...(rankings[activeTab] || [])]
      .map((item, index) => ({ ...item, _order: index }))
      .sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0) || a._order - b._order);

    sectionHeading.innerHTML = `
      <div class="rankings-section-title">
        <span class="rankings-section-accent"></span>
        <div>
          <div class="rankings-section-name">${labels[activeTab] || 'RANKINGS'}</div>
          <div class="rankings-section-caption">RANKED BY PERSONAL PREFERENCE</div>
        </div>
      </div>
      <div class="rankings-count">${String(entries.length).padStart(2, '0')} <span>ITEMS</span></div>
    `;

    if (!entries.length) {
      list.innerHTML = '<div class="rankings-empty">这个榜单还没有添加作品。</div>';
      return;
    }

    list.innerHTML = entries.map((item, index) => {
      const title = escapeHtml(item.title || 'Untitled');
      const cover = escapeHtml(item.cover || '');
      const url = escapeHtml(item.url || '#');
      const subtitle = item.subtitle
        ? `<div class="ranking-subtitle">${escapeHtml(item.subtitle)}</div>`
        : '';
      const rating = item.rating !== undefined && item.rating !== null && item.rating !== ''
        ? `<div class="ranking-rating"><span class="ranking-rating-star">★</span><strong>${escapeHtml(item.rating)}</strong><span class="ranking-rating-label">PERSONAL RATING</span></div>`
        : '';
      const coverHtml = cover
        ? `<img class="ranking-cover" src="${cover}" alt="${title}" loading="lazy">`
        : '<div class="ranking-cover ranking-cover-placeholder" aria-hidden="true"></div>';

      return `
        <a class="ranking-item" href="${url}">
          <div class="ranking-cover-wrap">${coverHtml}</div>
          <div class="ranking-info">
            <div class="ranking-title">${title}</div>
            ${subtitle}
            ${rating}
          </div>
          <div class="ranking-number" aria-hidden="true">#${String(index + 1).padStart(2, '0')}</div>
          <span class="ranking-arrow" aria-hidden="true">↗</span>
        </a>`;
    }).join('');
  }

  tabs.forEach((button) => {
    button.addEventListener('click', () => {
      activeTab = button.dataset.rankingTab;
      tabs.forEach((tab) => {
        const selected = tab === button;
        tab.classList.toggle('active', selected);
        tab.setAttribute('aria-pressed', String(selected));
      });
      render();
    });
  });

  // Set the initial tab state for keyboard and screen-reader users.
  tabs.forEach((tab) => {
    const selected = tab.dataset.rankingTab === activeTab;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-pressed', String(selected));
  });

  fetch(dataUrl)
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then((json) => {
      rankings = {
        movies: Array.isArray(json.movies) ? json.movies : [],
        books: Array.isArray(json.books) ? json.books : [],
        games: Array.isArray(json.games) ? json.games : [],
        anime: Array.isArray(json.anime) ? json.anime : []
      };
      render();
    })
    .catch(() => {
      sectionHeading.innerHTML = `
        <div class="rankings-section-title">
          <span class="rankings-section-accent"></span>
          <div>
            <div class="rankings-section-name">${labels[activeTab]}</div>
            <div class="rankings-section-caption">RANKED BY PERSONAL PREFERENCE</div>
          </div>
        </div>`;
      list.innerHTML = '<div class="rankings-empty">排行榜数据暂时无法加载，请检查 source/data/rankings.json。</div>';
    });
})();

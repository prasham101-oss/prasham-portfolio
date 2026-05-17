// ============================================================
//  script.js — Prasham Shah Portfolio
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollAnimations();
  initCarousel();
  renderIndexCards();
  renderDetailPage();
});

// ── Nav ──────────────────────────────────────────────────────
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  // Scroll border
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger
  const hamburger = nav.querySelector('.nav__hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('menu-open');
      hamburger.setAttribute('aria-expanded', nav.classList.contains('menu-open'));
    });
  }

  // Close mobile menu on link click
  nav.querySelectorAll('.nav__mobile-menu a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('menu-open'));
  });
}

// ── Scroll Animations ─────────────────────────────────────────
function initScrollAnimations() {
  const targets = document.querySelectorAll('.fade-in');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
}

// ── Carousel ──────────────────────────────────────────────────
function initCarousel() {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;

  let isPaused = false;
  let direction = 1;
  const speed = 1; // px per tick
  const interval = 20; // ms per tick

  const tick = setInterval(() => {
    if (isPaused) return;
    const { scrollLeft, scrollWidth, clientWidth } = carousel;
    const atEnd = scrollLeft + clientWidth >= scrollWidth - 1;
    const atStart = scrollLeft <= 0;

    if (atEnd) direction = -1;
    if (atStart) direction = 1;
    carousel.scrollLeft += speed * direction;
  }, interval);

  carousel.addEventListener('mouseenter', () => isPaused = true);
  carousel.addEventListener('mouseleave', () => isPaused = false);
  carousel.addEventListener('touchstart', () => isPaused = true, { passive: true });
  carousel.addEventListener('touchend', () => {
    setTimeout(() => isPaused = false, 1500);
  });

  return () => clearInterval(tick);
}

// ── Render index.html cards from data.js ──────────────────────
function renderIndexCards() {
  renderCarousel();
  renderInvestments();
  renderIndiaPicks();
}

function renderCarousel() {
  const container = document.querySelector('.carousel');
  if (!container || typeof marketTheses === 'undefined') return;
  container.innerHTML = '';
  marketTheses.forEach(item => {
    const isLive = item.status === 'published';
    const card = document.createElement('div');
    card.className = 'carousel-card' + (isLive ? '' : ' card--coming-soon');
    card.innerHTML = `
      <div class="card__meta">${item.sector}</div>
      <div class="card__title">${item.title}</div>
      <p class="card__teaser">${item.teaser}</p>
      <div class="card__footer">
        ${isLive
          ? `<a href="thesis-detail.html?id=${item.id}" class="btn btn--text">Read Full Thesis →</a>`
          : `<span class="badge badge--grey">Coming Soon</span>`
        }
      </div>`;
    container.appendChild(card);
  });
}

function renderInvestments() {
  const container = document.querySelector('.investments-grid');
  if (!container || typeof investmentIdeas === 'undefined') return;
  container.innerHTML = '';
  investmentIdeas.forEach(item => {
    const isLive = item.status === 'published';
    const typeClass = item.type === 'Public' ? 'badge--blue' : 'badge--grey';
    const card = document.createElement('div');
    card.className = 'card invest-card' + (isLive ? '' : ' card--coming-soon');
    card.innerHTML = `
      <div class="invest-card__badges">
        <span class="badge ${typeClass}">${item.type}</span>
        ${item.sector !== '—' ? `<span class="badge badge--grey">${item.sector}</span>` : ''}
      </div>
      <div class="card__title">${item.company}</div>
      <p class="card__teaser">${item.hook}</p>
      <div class="card__footer">
        ${isLive
          ? `<a href="investment-detail.html?id=${item.id}" class="btn btn--text">Read Thesis →</a>`
          : `<span class="badge badge--grey">Coming Soon</span>`
        }
      </div>`;
    container.appendChild(card);
  });
}

function renderIndiaPicks() {
  const container = document.querySelector('.picks-grid');
  if (!container || typeof indiaPicks === 'undefined') return;
  container.innerHTML = '';
  indiaPicks.forEach(item => {
    const isLive = item.status === 'published';
    const stageClass = item.stage === 'Growth' ? 'badge--green'
      : item.stage === 'Series A' ? 'badge--blue'
      : 'badge--grey';
    const card = document.createElement('div');
    card.className = 'card' + (isLive ? '' : ' card--coming-soon');
    card.innerHTML = `
      <div class="card__meta">${item.sector}</div>
      <div class="card__title">${item.name}</div>
      <p class="card__teaser">${item.summary}</p>
      <div class="card__footer" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">
        <span class="badge ${stageClass}">${item.stage}</span>
        ${isLive
          ? `<a href="india-pick-detail.html?id=${item.id}" class="btn btn--text">Read More →</a>`
          : ''
        }
      </div>`;
    container.appendChild(card);
  });
}

// ── Detail Page Renderer ───────────────────────────────────────
function renderDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) return;

  const path = window.location.pathname;

  if (path.includes('thesis-detail')) {
    renderThesisDetail(id);
  } else if (path.includes('investment-detail')) {
    renderInvestmentDetail(id);
  } else if (path.includes('india-pick-detail')) {
    renderIndiaPickDetail(id);
  }
}

function renderThesisDetail(id) {
  const content = document.getElementById('detail-content');
  if (!content || typeof marketTheses === 'undefined') return;

  const item = marketTheses.find(t => t.id === id);
  if (!item || item.status !== 'published') {
    showComingSoon(content);
    return;
  }

  document.title = `${item.title} — Prasham Shah`;
  content.innerHTML = `
    <div class="detail-header fade-in">
      <h1>${item.title}</h1>
      <div class="detail-meta">
        ${item.sector !== '—' ? `<span class="badge badge--grey">${item.sector}</span>` : ''}
        ${item.date !== '—' ? `<span style="font-size:0.8rem;color:var(--muted)">${item.date}</span>` : ''}
      </div>
    </div>
    <hr class="divider" style="margin-bottom:48px">
    <div class="detail-section fade-in">
      <h3>Executive Summary</h3>
      <p>${item.execSummary || ''}</p>
    </div>
    ${renderThesisPoints(item.thesisPoints)}
    <div class="detail-section fade-in">
      <h3>Data &amp; Charts</h3>
      <div class="data-placeholder">${item.dataNote || 'Chart / Table — Coming Soon'}</div>
    </div>
    <div class="detail-section fade-in">
      <h3>Conclusion</h3>
      <p>${item.conclusion || ''}</p>
    </div>`;
  initScrollAnimations();
}

function renderInvestmentDetail(id) {
  const content = document.getElementById('detail-content');
  if (!content || typeof investmentIdeas === 'undefined') return;

  const item = investmentIdeas.find(t => t.id === id);
  if (!item || item.status !== 'published') {
    showComingSoon(content);
    return;
  }

  document.title = `${item.company} — Prasham Shah`;
  content.innerHTML = `
    <div class="detail-header fade-in">
      <h1>${item.company}</h1>
      <div class="detail-meta">
        ${item.type !== '—' ? `<span class="badge ${item.type === 'Public' ? 'badge--blue' : 'badge--grey'}">${item.type}</span>` : ''}
        ${item.sector !== '—' ? `<span class="badge badge--grey">${item.sector}</span>` : ''}
      </div>
    </div>
    <hr class="divider" style="margin-bottom:48px">
    <div class="detail-section fade-in">
      <h3>Company Overview</h3>
      <p>${item.overview || ''}</p>
    </div>
    <div class="detail-section fade-in">
      <h3>Investment Thesis</h3>
      <p>${item.thesis || ''}</p>
    </div>
    ${renderMetrics(item.metrics)}
    <div class="detail-section fade-in">
      <h3>Key Risks</h3>
      <ul class="risks-list">
        ${(item.risks || []).map(r => `<li>${r}</li>`).join('')}
      </ul>
    </div>
    <div class="detail-section fade-in">
      <h3>Conclusion</h3>
      <p>${item.conclusion || ''}</p>
    </div>`;
  initScrollAnimations();
}

function renderIndiaPickDetail(id) {
  const content = document.getElementById('detail-content');
  if (!content || typeof indiaPicks === 'undefined') return;

  const item = indiaPicks.find(t => t.id === id);
  if (!item || item.status !== 'published') {
    showComingSoon(content);
    return;
  }

  document.title = `${item.name} — Prasham Shah`;
  content.innerHTML = `
    <div class="detail-header fade-in">
      <h1>${item.name}</h1>
      <div class="detail-meta">
        ${item.sector !== '—' ? `<span class="badge badge--grey">${item.sector}</span>` : ''}
        ${item.stage !== '—' ? `<span class="badge ${item.stage === 'Growth' ? 'badge--green' : 'badge--blue'}">${item.stage}</span>` : ''}
      </div>
    </div>
    <hr class="divider" style="margin-bottom:48px">
    <div class="detail-section fade-in">
      <h3>Overview</h3>
      <p>${item.overview || ''}</p>
    </div>
    <div class="detail-section fade-in">
      <h3>Investment Thesis</h3>
      <p>${item.thesis || ''}</p>
    </div>
    <div class="detail-section fade-in">
      <h3>Key Risks</h3>
      <ul class="risks-list">
        ${(item.risks || []).map(r => `<li>${r}</li>`).join('')}
      </ul>
    </div>
    <div class="detail-section fade-in">
      <h3>Conclusion</h3>
      <p>${item.conclusion || ''}</p>
    </div>`;
  initScrollAnimations();
}

// ── Helpers ───────────────────────────────────────────────────
function showComingSoon(el) {
  el.innerHTML = `
    <div class="coming-soon-msg">
      <h2>In Progress</h2>
      <p>This piece is being researched and written. Check back soon.</p>
      <a href="index.html" class="btn btn--outline">← Back to Portfolio</a>
    </div>`;
}

function renderThesisPoints(points) {
  if (!points || !points.length) return '';
  return `
    <div class="detail-section fade-in">
      <h3>Key Thesis Points</h3>
      ${points.map((p, i) => `
        <div class="thesis-point">
          <h4>${i + 1}. ${p.heading}</h4>
          <p>${p.body}</p>
        </div>`).join('')}
    </div>`;
}

function renderMetrics(metrics) {
  if (!metrics || !metrics.length) return '';
  return `
    <div class="detail-section fade-in">
      <h3>Key Metrics</h3>
      <div class="metrics-grid">
        ${metrics.map(m => `
          <div class="metric-card">
            <span class="metric-card__value">${m.value}</span>
            <span class="metric-card__label">${m.label}</span>
          </div>`).join('')}
      </div>
    </div>`;
}

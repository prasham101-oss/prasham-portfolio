// ============================================================
//  script.js — Prasham Shah Portfolio
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollAnimations();
  renderIndexCards();
  initModal();
  renderDetailPage();
});

// ── Nav ──────────────────────────────────────────────────────
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const hamburger = nav.querySelector('.nav__hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('menu-open');
      hamburger.setAttribute('aria-expanded', nav.classList.contains('menu-open'));
    });
  }

  nav.querySelectorAll('.nav__mobile-menu a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('menu-open'));
  });
}

// ── Scroll Animations ─────────────────────────────────────────
function initScrollAnimations() {
  const targets = document.querySelectorAll('.fade-in:not(.visible)');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
}

// ── Render index.html cards ───────────────────────────────────
function renderIndexCards() {
  renderThesisGrid();
  renderInvestments();
}

function renderThesisGrid() {
  const container = document.querySelector('.thesis-grid');
  if (!container || typeof marketTheses === 'undefined') return;
  container.innerHTML = '';
  marketTheses.forEach(item => {
    const isLive = item.status === 'published';
    const card = document.createElement('div');
    card.className = 'thesis-card' + (isLive ? ' thesis-card--live' : ' thesis-card--coming-soon');
    if (isLive && item.image) card.style.backgroundImage = `url('${item.image}')`;
    card.innerHTML = `
      <div class="thesis-card__content">
        <div class="thesis-card__title">${item.title}</div>
      </div>`;
    if (isLive) card.addEventListener('click', () => openModal('thesis', item.id));
    container.appendChild(card);
  });
}

function renderInvestments() {
  const container = document.querySelector('.investments-grid');
  if (!container || typeof indiaPicks === 'undefined') return;
  container.innerHTML = '';
  indiaPicks.forEach(item => {
    const isLive = item.status === 'published';
    const card = document.createElement('div');
    card.className = 'pick-card' + (isLive ? ' pick-card--live' : ' pick-card--coming-soon');
    if (isLive && item.logo) {
      if (item.logo.startsWith('http')) {
        card.style.backgroundImage = `url('${item.logo}')`;
      } else {
        card.style.backgroundImage = `url('${item.logo}')`;
      }
    }
    card.innerHTML = isLive ? '' : `
      <div class="pick-card__content">
        <div class="pick-card__expand">${item.name}</div>
      </div>`;
    if (isLive) card.addEventListener('click', () => openModal('pick', item.id));
    container.appendChild(card);
  });
}

// ── Modal ─────────────────────────────────────────────────────
function initModal() {
  const modal = document.getElementById('card-modal');
  if (!modal) return;

  modal.querySelector('.modal__backdrop').addEventListener('click', closeModal);
  modal.querySelector('.modal__close').addEventListener('click', closeModal);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(type, id) {
  const modal = document.getElementById('card-modal');
  const body = document.getElementById('modal-body');
  if (!modal || !body) return;

  let html = '';

  if (type === 'thesis') {
    const item = (typeof marketTheses !== 'undefined') && marketTheses.find(t => t.id === id);
    if (!item || item.status !== 'published') {
      html = comingSoonHTML();
    } else {
      html = `
        <div class="modal-thesis-header" style="background-image:url('${item.image || ''}')">
          <div class="modal-thesis-header__overlay"></div>
          <div class="modal-thesis-header__text">
            ${item.sector !== '—' ? `<span class="badge badge--grey" style="background:rgba(255,255,255,0.15);color:#fff;border:1px solid rgba(255,255,255,0.3)">${item.sector}</span>` : ''}
            ${item.date && item.date !== '—' ? `<span style="font-size:0.75rem;color:rgba(255,255,255,0.6);margin-left:8px">${item.date}</span>` : ''}
            <h2 style="color:#fff;margin-top:10px">${item.title}</h2>
            ${item.subtitle ? `<p style="color:rgba(255,255,255,0.7);font-size:0.95rem;margin-top:4px">${item.subtitle}</p>` : ''}
          </div>
        </div>
        <div class="modal-content-body">
          ${item.execSummary ? sectionHTML('Overview', `<p>${item.execSummary}</p>`) : ''}
          ${thesisPointsHTML(item.usThemes, 'Themes from the US Market')}
          ${thesisPointsHTML(item.indiaContext, 'India Context')}
          ${item.conclusion ? sectionHTML('Conclusion', `<p>${item.conclusion}</p>`) : ''}
        </div>`;
    }
  } else if (type === 'pick') {
    const item = (typeof indiaPicks !== 'undefined') && indiaPicks.find(t => t.id === id);
    if (!item || item.status !== 'published') {
      html = comingSoonHTML();
    } else {
      const stageClass = item.stage === 'Growth' ? 'badge--green' : item.stage === 'Series A' ? 'badge--blue' : 'badge--grey';
      html = `
        <div class="modal-content-body">
          <div class="detail-meta" style="margin-bottom:12px;gap:8px;display:flex;flex-wrap:wrap;align-items:center">
            ${item.sector ? `<span class="badge badge--grey">${item.sector}</span>` : ''}
            ${item.stage && item.stage !== '—' ? `<span class="badge ${stageClass}">${item.stage}</span>` : ''}
            ${item.opportunityStatus ? `<span style="font-size:0.75rem;color:var(--accent);font-weight:500">${item.opportunityStatus}</span>` : ''}
          </div>
          <h2 style="margin-bottom:6px">${item.name}</h2>
          ${item.website ? `<a href="${item.website}" target="_blank" rel="noopener" style="font-size:0.82rem;color:var(--muted);text-decoration:underline">${item.website.replace('https://','')}</a>` : ''}
          <hr class="divider" style="margin:20px 0 24px">
          ${item.companyDescription ? sectionHTML('Company Overview', `<p>${item.companyDescription}</p>`) : ''}
          ${item.companyUpdate && item.companyUpdate.length ? sectionHTML('Recent Updates', `<ol class="update-list">${item.companyUpdate.map(u => `<li>${u}</li>`).join('')}</ol>`) : ''}
          ${thesisPointsHTML(item.highlights, 'Key Investment Highlights')}
        </div>`;
    }
  }

  body.innerHTML = html;
  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal__close').focus();
}

function closeModal() {
  const modal = document.getElementById('card-modal');
  if (!modal) return;
  modal.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

// ── Detail Page Renderer (for standalone detail pages) ────────
function renderDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) return;

  const path = window.location.pathname;
  if (path.includes('thesis-detail')) renderThesisDetail(id);
  else if (path.includes('investment-detail')) renderInvestmentDetail(id);
  else if (path.includes('india-pick-detail')) renderIndiaPickDetail(id);
}

function renderThesisDetail(id) {
  const content = document.getElementById('detail-content');
  if (!content || typeof marketTheses === 'undefined') return;
  const item = marketTheses.find(t => t.id === id);
  if (!item || item.status !== 'published') { showComingSoon(content); return; }
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
    <div class="detail-section fade-in"><h3>Executive Summary</h3><p>${item.execSummary || ''}</p></div>
    ${thesisPointsHTML(item.thesisPoints)}
    <div class="detail-section fade-in"><h3>Data &amp; Charts</h3><div class="data-placeholder">${item.dataNote || 'Chart / Table — Coming Soon'}</div></div>
    <div class="detail-section fade-in"><h3>Conclusion</h3><p>${item.conclusion || ''}</p></div>`;
  initScrollAnimations();
}

function renderInvestmentDetail(id) {
  const content = document.getElementById('detail-content');
  if (!content || typeof investmentIdeas === 'undefined') return;
  const item = investmentIdeas.find(t => t.id === id);
  if (!item || item.status !== 'published') { showComingSoon(content); return; }
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
    <div class="detail-section fade-in"><h3>Overview</h3><p>${item.overview || ''}</p></div>
    <div class="detail-section fade-in"><h3>Investment Thesis</h3><p>${item.thesis || ''}</p></div>
    ${metricsHTML(item.metrics)}
    <div class="detail-section fade-in"><h3>Key Risks</h3><ul class="risks-list">${(item.risks||[]).map(r=>`<li>${r}</li>`).join('')}</ul></div>
    <div class="detail-section fade-in"><h3>Conclusion</h3><p>${item.conclusion || ''}</p></div>`;
  initScrollAnimations();
}

function renderIndiaPickDetail(id) {
  const content = document.getElementById('detail-content');
  if (!content || typeof indiaPicks === 'undefined') return;
  const item = indiaPicks.find(t => t.id === id);
  if (!item || item.status !== 'published') { showComingSoon(content); return; }
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
    <div class="detail-section fade-in"><h3>Overview</h3><p>${item.overview || ''}</p></div>
    <div class="detail-section fade-in"><h3>Investment Thesis</h3><p>${item.thesis || ''}</p></div>
    ${risksHTML(item.risks)}
    <div class="detail-section fade-in"><h3>Conclusion</h3><p>${item.conclusion || ''}</p></div>`;
  initScrollAnimations();
}

// ── Helpers ───────────────────────────────────────────────────
function sectionHTML(title, bodyHTML) {
  return `<div class="detail-section"><h3>${title}</h3>${bodyHTML}</div>`;
}

function thesisPointsHTML(points, heading = 'Key Thesis Points') {
  if (!points || !points.length) return '';
  return sectionHTML(heading, points.map((p, i) => `
    <div class="thesis-point">
      <h4>${i + 1}. ${p.heading}</h4>
      <p>${p.body}</p>
    </div>`).join(''));
}

function risksHTML(risks) {
  if (!risks || !risks.length) return '';
  return sectionHTML('Key Risks', `<ul class="risks-list">${risks.map(r => `<li>${r}</li>`).join('')}</ul>`);
}

function metricsHTML(metrics) {
  if (!metrics || !metrics.length) return '';
  return sectionHTML('Key Metrics', `<div class="metrics-grid">${metrics.map(m => `
    <div class="metric-card">
      <span class="metric-card__value">${m.value}</span>
      <span class="metric-card__label">${m.label}</span>
    </div>`).join('')}</div>`);
}

function showComingSoon(el) {
  el.innerHTML = `
    <div class="coming-soon-msg">
      <h2>In Progress</h2>
      <p>This piece is being researched and written. Check back soon.</p>
      <a href="index.html" class="btn btn--outline">← Back to Portfolio</a>
    </div>`;
}

function comingSoonHTML() {
  return `<div class="modal-coming-soon">
    <h2>In Progress</h2>
    <p>This piece is being researched and written. Check back soon.</p>
  </div>`;
}

'use strict';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  document.documentElement.classList.add('js-reveal');
  const revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    }
  }, { threshold: 0.07, rootMargin: '0px 0px 15px 0px' });
  reveals.forEach(element => revealObserver.observe(element));
}

const progress = document.querySelector('.scroll-progress');
const navLinks = [...document.querySelectorAll('.nav-link')];
const sections = ['inicio', 'sobre-mi', 'proyectos'].map(id => document.getElementById(id));
let scheduled = false;
function updateScroll() {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0})`;
  let active = sections[0].id;
  for (const section of sections) {
    if (section.getBoundingClientRect().top < window.innerHeight * 0.4) active = section.id;
  }
  navLinks.forEach(link => {
    const selected = link.hash === `#${active}`;
    link.classList.toggle('active', selected);
    if (selected) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scheduled) {
    scheduled = true;
    requestAnimationFrame(updateScroll);
  }
}, { passive: true });
window.addEventListener('resize', updateScroll, { passive: true });
updateScroll();

const brands = document.querySelector('.brands');
const motionToggle = document.querySelector('.motion-toggle');
motionToggle.addEventListener('click', () => {
  const paused = brands.classList.toggle('paused');
  motionToggle.setAttribute('aria-pressed', String(paused));
  motionToggle.setAttribute('aria-label', paused ? 'Reanudar movimiento de marcas' : 'Pausar movimiento de marcas');
  motionToggle.querySelector('.pause-symbol').textContent = paused ? '▷' : 'Ⅱ';
  motionToggle.querySelector('.motion-label').textContent = paused ? 'Reanudar' : 'Pausar';
});

const lightbox = document.querySelector('.lightbox');
const works = [...document.querySelectorAll('.work-open')];
const lightboxImage = lightbox.querySelector('.lightbox-image');
let currentWork = 0;
let lastTrigger = null;
function showWork(index) {
  currentWork = (index + works.length) % works.length;
  const work = works[currentWork];
  lightboxImage.src = work.href;
  lightboxImage.alt = work.querySelector('img').alt;
  document.getElementById('lightbox-title').textContent = work.dataset.title;
  document.getElementById('lightbox-brand').textContent = work.dataset.brand;
  lightbox.querySelector('.lightbox-count').textContent = `${currentWork + 1} / ${works.length}`;
  lightbox.querySelector('.lightbox-image-wrap').scrollTop = 0;
}
works.forEach((work, index) => work.addEventListener('click', event => {
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || typeof lightbox.showModal !== 'function') return;
  event.preventDefault();
  lastTrigger = work;
  showWork(index);
  lightbox.showModal();
  document.body.classList.add('modal-open');
}));
lightbox.querySelector('.lightbox-prev').addEventListener('click', () => showWork(currentWork - 1));
lightbox.querySelector('.lightbox-next').addEventListener('click', () => showWork(currentWork + 1));
lightbox.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); showWork(currentWork - 1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); showWork(currentWork + 1); }
});
lightbox.addEventListener('click', event => {
  const rect = lightbox.getBoundingClientRect();
  if (event.target === lightbox && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) lightbox.close();
});
lightbox.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  if (lastTrigger) lastTrigger.focus({ preventScroll: true });
});
window.addEventListener('beforeprint', () => reveals.forEach(element => element.classList.add('visible')));

const count = document.querySelector('.day-count');

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  count.textContent = '00';
  const start = performance.now();

  function updateCount(now) {
    const day = Math.min(7, Math.floor((now - start) / 150));
    count.textContent = String(day).padStart(2, '0');
    if (day < 7) requestAnimationFrame(updateCount);
  }

  requestAnimationFrame(updateCount);
}

const map = document.querySelector('.constellation-map');
const highlight = map.querySelector('.constellation-art').cloneNode(true);
highlight.classList.add('constellation-highlight');
highlight.setAttribute('aria-hidden', 'true');
map.append(highlight);

function moveGlow(event) {
  const element = event.currentTarget;
  const { left, top } = element.getBoundingClientRect();
  element.style.setProperty('--glow-x', `${event.clientX - left}px`);
  element.style.setProperty('--glow-y', `${event.clientY - top}px`);
  element.classList.add('is-glowing');
}

function clearGlow(event) {
  event.currentTarget.classList.remove('is-glowing');
}

for (const element of [document.querySelector('.hero-wordmark'), map]) {
  element.addEventListener('pointerenter', moveGlow);
  element.addEventListener('pointermove', moveGlow);
  element.addEventListener('pointerdown', moveGlow);
  element.addEventListener('pointerleave', clearGlow);
  element.addEventListener('pointercancel', clearGlow);
}

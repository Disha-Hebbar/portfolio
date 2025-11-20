// Minimal cursor follower (smooth lerp)
const cursor = document.querySelector('.cursor-dot');
let mx = 0, my = 0, dx = 0, dy = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

// smoother follow
function tick(){
  dx += (mx - dx) * 0.14;
  dy += (my - dy) * 0.14;
  if (cursor) cursor.style.transform = `translate(${dx}px, ${dy}px)`;
  requestAnimationFrame(tick);
}
tick();

// small util: set current year in footer
document.addEventListener('DOMContentLoaded', () => {
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if (el) el.textContent = y;
});

// simple fade-in on scroll (intersection observer)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.card, .skill-card, .exp-card, .hero-card, .contact-card').forEach(el => {
  el.classList.add('preview-hidden');
  observer.observe(el);
});

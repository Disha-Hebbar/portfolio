// Cursor-following dot (smooth)
const cursorDot = document.querySelector(".cursor-dot");

let mouseX = 0, mouseY = 0;
let dotX = 0, dotY = 0;

// Track mouse movement
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animate cursor dot
function animate() {
  dotX += (mouseX - dotX) * 0.1;
  dotY += (mouseY - dotY) * 0.1;

  cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;

  requestAnimationFrame(animate);
}
animate();

// ================================
// Fade-in on scroll for project cards
// ================================
const cards = document.querySelectorAll('.card');

function revealCards() {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom && !card.classList.contains('show')) {
      setTimeout(() => {
        card.classList.add('show');
      }, index * 150);
    }
  });
}

window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);

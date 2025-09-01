// Cursor-following dot (smooth)
const cursorDot = document.querySelector(".cursor-dot");

let mouseX = 0, mouseY = 0;
let dotX = 0, dotY = 0;

// Track mouse movement
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animate the dot (lerp movement)
function animate() {
  dotX += (mouseX - dotX) * 0.1; // 0.1 = smoothness (lower = slower follow)
  dotY += (mouseY - dotY) * 0.1;

  cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;

  requestAnimationFrame(animate);
}
animate();

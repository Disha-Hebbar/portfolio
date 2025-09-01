// Cursor-following dot
const cursorDot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {
  cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Add subtle shadow to header on scroll
const header = document.querySelector('.site-header');
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      header.style.boxShadow = window.scrollY > 6 ? '0 8px 18px rgba(2,6,23,.06)' : 'none';
      ticking = false;
    });
    ticking = true;
  }
});

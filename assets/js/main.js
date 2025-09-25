// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// "Book" buttons -> open mail or calendly (replace with your link if you have one)
const BOOK_URL = "mailto:anjumyaseen@yahoo.com?subject=Fawzix%20AI%20Booking";
document.querySelectorAll('[data-book]').forEach(btn => {
  btn.addEventListener('click', () => {
    // You can swap to Calendly/Acuity link here instead of mailto:
    window.location.href = BOOK_URL;
  });
});

// Contact form (Formspree or similar). If you don't use Formspree, keep default browser submit.
const form = document.getElementById('contactForm');
const msg  = document.getElementById('formMsg');

if (form && form.action.includes('formspree.io')) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    msg.textContent = "Sending…";
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
      if (res.ok) {
        form.reset();
        msg.textContent = "Thanks! I'll get back to you shortly.";
      } else {
        msg.textContent = "There was a problem sending your message. Please email me directly.";
      }
    } catch {
      msg.textContent = "Network error. Please email me directly.";
    }
  });
}

// Shared nav HTML — written into every page
document.addEventListener('DOMContentLoaded', () => {

  // ── NAV ──
  const navHTML = `
<nav>
  <a href="index.html" class="nav-logo">GF<span>.</span>PHYSIO</a>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="sport.html">Sport</a></li>
    <li><a href="blog.html">Blog</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li><a href="https://gfphysio.au4.cliniko.com/bookings#service" class="nav-cta" target="_blank">Book Now</a></li>
  </ul>
  <button class="nav-hamburger" id="burger" aria-label="Open menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobile-menu">
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="services.html">Services</a>
  <a href="sport.html">Sport</a>
  <a href="blog.html">Blog</a>
  <a href="contact.html">Contact</a>
  <a href="https://gfphysio.au4.cliniko.com/bookings#service" class="nav-cta" target="_blank">Book Now</a>
</div>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // ── FOOTER ──
  const footerHTML = `
<footer>
  <div class="footer-top">
    <div>
      <div class="footer-logo">GF<span>.</span>PHYSIO</div>
      <p class="footer-tagline">Sports & Clinical Physiotherapy · McKinnon, Melbourne</p>
    </div>
    <div class="footer-nav">
      <div class="footer-col">
        <h4>Navigate</h4>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="sport.html">Sport</a>
        <a href="services.html">Services</a>
        <a href="blog.html">Blog</a>
        <a href="contact.html">Contact</a>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <a href="services.html#physio">Physiotherapy</a>
        <a href="services.html#pilates">Clinical Pilates</a>
        <a href="services.html#womens">Women's Health</a>
        <a href="services.html#ndis">NDIS Support</a>
      </div>
      <div class="footer-col">
        <h4>Connect</h4>
        <a href="mailto:georgia@gfphysio.com.au">georgia@gfphysio.com.au</a>
        <a href="tel:0437995888">0437 995 888</a>
        <a href="https://www.instagram.com/gfphysio_/" target="_blank">@gfphysio_ on Instagram</a>
        <a href="https://gfphysio.au4.cliniko.com/bookings#service" target="_blank">Book Online</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p class="footer-copy">© 2025 GF Physio · Georgia Fagan · AHPRA Registered · 203 McKinnon Road, McKinnon VIC 3204</p>
    <div class="footer-social">
      <a href="https://www.instagram.com/gfphysio_/" class="social-btn" target="_blank">IG</a>
    </div>
  </div>
</footer>`;

  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Active nav state
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });

  // Hamburger
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
    document.addEventListener('click', (e) => {
      if (!burger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
      }
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
});

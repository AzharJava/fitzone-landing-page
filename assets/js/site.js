(function () {
  const page = document.body.dataset.page || 'home';
  const navItems = [
    ['home', 'Home', 'index.html'],
    ['about', 'About', 'about.html'],
    ['services', 'Services', 'services.html'],
    ['plans', 'Plans', 'plans.html'],
    ['trainers', 'Trainers', 'trainers.html'],
    ['gallery', 'Gallery', 'gallery.html'],
    ['contact', 'Contact', 'contact.html']
  ];

  const brand = `
    <a class="brand" href="index.html" aria-label="FitZone home">
      <span class="brand-mark" aria-hidden="true"></span>
      <span class="brand-copy"><strong>FIT<span>ZONE</span></strong><small>GYM & FITNESS</small></span>
    </a>`;

  const header = document.querySelector('#site-header');
  if (header) {
    header.className = 'site-header';
    header.innerHTML = `<div class="container nav-wrap">
      ${brand}
      <nav class="main-nav" aria-label="Main navigation">
        ${navItems.map(([key, label, url]) => `<a href="${url}"${key === page ? ' class="active" aria-current="page"' : ''}>${label}</a>`).join('')}
      </nav>
      <a class="btn header-cta" href="contact.html">Join Now <span aria-hidden="true">→</span></a>
      <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false">☰</button>
    </div>`;
  }

  const footer = document.querySelector('#site-footer');
  if (footer) {
    footer.className = 'footer';
    footer.innerHTML = `<div class="container footer-main">
      <div>${brand}<p>Your journey to a stronger, healthier and happier you starts here. Join our fitness community today.</p><div class="socials"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="YouTube">▶</a><a href="#" aria-label="LinkedIn">in</a></div></div>
      <div><h4>Quick Links</h4><ul>${navItems.map(([, label, url]) => `<li><a href="${url}">${label}</a></li>`).join('')}</ul></div>
      <div><h4>Contact Us</h4><ul><li>● &nbsp;123 Fitness Street,<br>&nbsp;&nbsp;&nbsp;&nbsp;Kolkata, India</li><li>☎ &nbsp;+91 98765 43210</li><li>✉ &nbsp;info@fitzonegym.com</li><li>◷ &nbsp;Mon–Sun: 5:00 AM–11:00 PM</li></ul></div>
      <div><h4>Newsletter</h4><p>Subscribe for updates, offers and fitness tips.</p><form class="newsletter demo-form"><input type="email" aria-label="Email address" placeholder="Your email address" required><button aria-label="Subscribe">→</button></form></div>
    </div><div class="footer-bottom"><div class="container"><span>© 2024 FitZone Gym & Fitness. Demo website.</span><span>Privacy Policy &nbsp;|&nbsp; Terms & Conditions</span></div></div>`;
  }

  const menu = document.querySelector('.menu-toggle');
  menu?.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menu.textContent = open ? '✕' : '☰';
  });

  document.querySelectorAll('.filter-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      document.querySelectorAll('.filter-btn').forEach((item) => item.classList.toggle('active', item === button));
      document.querySelectorAll('.gallery-item').forEach((item) => {
        item.classList.toggle('hidden', filter !== 'all' && item.dataset.category !== filter);
      });
    });
  });

  document.querySelectorAll('.faq button').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq');
      const open = item.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
    });
  });

  document.querySelectorAll('.demo-form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const message = form.querySelector('.form-message');
      if (message) {
        message.style.display = 'block';
        message.textContent = 'Thank you! This demo form is ready to connect to your preferred form service.';
      } else {
        const email = form.querySelector('input[type="email"]');
        if (email) email.value = '';
        alert('Thanks for subscribing! This is a demo form.');
      }
    });
  });
})();


// Mobile menu
(function(){
  const open = document.querySelector('.nav-mobile');
  const menu = document.getElementById('mobileMenu');
  if (!open || !menu) return;
  const close = menu.querySelector('.mobile-menu-close');
  function toggle(state) {
    menu.classList.toggle('open', state);
    document.body.style.overflow = state ? 'hidden' : '';
  }
  open.addEventListener('click', () => toggle(true));
  if (close) close.addEventListener('click', () => toggle(false));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggle(false)));
})();

// Floating CTA: hide on /work.html entirely; otherwise hide near forms / footer / cta-strip
(function(){
  const float = document.querySelector('.floating-cta');
  if (!float) return;
  // Hide on Work With Me page entirely (the form IS the CTA)
  if (location.pathname.endsWith('work.html')) {
    float.style.display = 'none';
    return;
  }
  const targets = document.querySelectorAll('form, footer, .cta-strip, .travel-cta');
  if (!targets.length) return;
  const visible = new Set();
  const io = new IntersectionObserver(es => {
    es.forEach(e => {
      if (e.isIntersecting) visible.add(e.target);
      else visible.delete(e.target);
    });
    float.classList.toggle('hidden', visible.size > 0);
  }, { threshold: 0.05 });
  targets.forEach(t => io.observe(t));
})();

// Reveal
(function(){
  const els = document.querySelectorAll('section, .testimonial, .exp-item, .service, .reel, .story-pair');
  const style = document.createElement('style');
  style.textContent = '.reveal{opacity:0;transform:translateY(20px);transition:opacity .9s ease,transform .9s ease}.reveal.in{opacity:1;transform:translateY(0)}';
  document.head.appendChild(style);
  els.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver(es => {
    es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  els.forEach(el => io.observe(el));
})();

// Form fallback when Formspree not yet wired
(function(){
  const form = document.getElementById('contactForm');
  if (!form) return;
  const action = form.getAttribute('action') || '';
  if (action.includes('your-form-id')) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Thank you — I'll be in touch within 2–3 business days.\n\n(Note: form is staged. Connect Formspree to make it live.)");
    });
  }
})();

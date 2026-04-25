// Mobile nav toggle
const navEl = document.querySelector('nav.site-nav');
const toggleEl = document.querySelector('.nav-toggle');
if (toggleEl && navEl) {
  toggleEl.addEventListener('click', () => {
    navEl.classList.toggle('open');
    toggleEl.classList.toggle('active');
  });
}

// Floating CTA — appears after scroll, hides over forms and footer
const floating = document.querySelector('.floating-cta');
if (floating) {
  let pastFold = false, overForm = false, overFooter = false;
  const update = () => {
    if (pastFold && !overForm && !overFooter) floating.classList.add('visible');
    else floating.classList.remove('visible');
  };
  window.addEventListener('scroll', () => {
    pastFold = window.scrollY > window.innerHeight * 0.5;
    update();
  }, { passive: true });
  const formEl = document.querySelector('form');
  if (formEl) {
    new IntersectionObserver(es => { overForm = es[0].isIntersecting; update(); },
      { threshold: 0.05 }).observe(formEl);
  }
  const footEl = document.querySelector('footer');
  if (footEl) {
    new IntersectionObserver(es => { overFooter = es[0].isIntersecting; update(); },
      { threshold: 0.01 }).observe(footEl);
  }
}

// Reveal on scroll — only hide things initially below the fold
const fold = window.innerHeight;
const candidates = document.querySelectorAll('section, .testimonial, .exp-item, .service');
candidates.forEach(el => {
  const top = el.getBoundingClientRect().top;
  if (top > fold * 0.9) el.classList.add('reveal');
});
const revealIo = new IntersectionObserver(es => {
  es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); revealIo.unobserve(e.target); }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => revealIo.observe(el));

// Form fallback
const form = document.querySelector('form');
if (form && form.action.includes('your-form-id')) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert("Thank you — I'll be in touch within 2-3 business days. (Form is staged: connect Formspree to make it live.)");
  });
}

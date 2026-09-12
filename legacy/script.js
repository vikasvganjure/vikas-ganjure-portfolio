/* Main portfolio interactions. */
document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('#menu');
  const navbar = document.querySelector('.navbar');

  // Mobile menu
  if (menu && navbar) {
    menu.addEventListener('click', function () {
      menu.classList.toggle('fa-times');
      navbar.classList.toggle('nav-toggle');
    });
  }

  // Close menu and update active navigation item on scroll.
  function handleScroll() {
    if (menu) menu.classList.remove('fa-times');
    if (navbar) navbar.classList.remove('nav-toggle');

    const scrollTop = document.querySelector('#scroll-top');
    if (scrollTop) scrollTop.classList.toggle('active', window.scrollY > 300);

    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.navbar a');
    let current = 'home';

    sections.forEach(function (section) {
      if (window.scrollY >= section.offsetTop - 160) current = section.id;
    });

    links.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // Typing effect
  if (typeof Typed !== 'undefined' && document.querySelector('.typing-text')) {
    new Typed('.typing-text', {
      strings: ['Java Developer', 'Backend Developer', 'Software Developer', 'Web Developer'],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1200,
      loop: true
    });
  }

  // Scroll reveal
  if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '50px',
      duration: 900,
      delay: 100,
      reset: false
    });

    sr.reveal('.home .content', { origin: 'left' });
    sr.reveal('.home .image', { origin: 'right' });
    sr.reveal('.about .image', { origin: 'left' });
    sr.reveal('.about .content', { origin: 'right' });
    sr.reveal('.skill-card', { interval: 100 });
    sr.reveal('.education .box', { interval: 150 });
    sr.reveal('.projects .box', { interval: 150 });
    sr.reveal('.experience .container', { interval: 150 });
    sr.reveal('.certification-card', { interval: 100 });
    sr.reveal('.contact .content', { origin: 'left' });
    sr.reveal('.contact form', { origin: 'right' });
  }

  // Tilt cards
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll('.skill-card, .certification-card'), {
      max: 10,
      speed: 400,
      glare: true,
      'max-glare': 0.2
    });
  }

  // Contact form - uses the EmailJS IDs already present in your previous script.
  const contactForm = document.querySelector('#contact-form');
  const formStatus = document.querySelector('#form-status');

  if (contactForm && typeof emailjs !== 'undefined') {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const button = contactForm.querySelector('button');
      const buttonText = button ? button.querySelector('span') : null;

      if (button) button.disabled = true;
      if (buttonText) buttonText.textContent = 'Sending...';
      if (formStatus) formStatus.textContent = '';

      emailjs.sendForm('service_sxhkdba', 'template_9fbmhxi', contactForm)
        .then(function () {
          contactForm.reset();
          if (formStatus) formStatus.textContent = 'Message sent successfully!';
        })
        .catch(function (error) {
          console.error('EmailJS Error:', error);
          if (formStatus) formStatus.textContent = 'Unable to send message. Please try again.';
        })
        .finally(function () {
          if (button) button.disabled = false;
          if (buttonText) buttonText.textContent = 'Send Message';
        });
    });
  }

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Browser tab title
  document.addEventListener('visibilitychange', function () {
    document.title = document.visibilityState === 'visible'
      ? 'Vikas Ganjure | Java & Web Developer'
      : 'Come Back To Portfolio';
  });
});

/* Particle background for the home section. */
(function () {
  function initParticles() {
    if (typeof particlesJS === 'undefined') return;

    const home = document.querySelector('.home');
    if (!home) return;

    let container = document.getElementById('particles-js');
    if (!container) {
      container = document.createElement('div');
      container.id = 'particles-js';
      home.prepend(container);
    }

    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#484944' },
        shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
        opacity: { value: 0.5, random: false },
        size: { value: 4, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#000000',
          opacity: 0.25,
          width: 1
        },
        move: {
          enable: true,
          speed: 3,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out'
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          repulse: { distance: 120 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParticles);
  } else {
    initParticles();
  }
})();

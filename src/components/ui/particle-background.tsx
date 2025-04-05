'use client';

import React, { useEffect } from 'react';
//@ts-ignore
import particlesJS from 'particles.js';
import Stats from 'stats.js';

export default function ParticlesBackground() {
  useEffect(() => {
    // Initialize particles.js
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: {
          type: 'circle',
          stroke: { width: 0, color: '#000000' },
          polygon: { nb_sides: 5 },
          image: { src: '/img/github.svg', width: 100, height: 100 }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 }
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
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 }
        }
      },
      retina_detect: true
    });

    // Initialize stats.js
    const stats = new Stats();
    stats.showPanel(0); // 0: fps
    stats.dom.style.position = 'absolute';
    stats.dom.style.left = '0px';
    stats.dom.style.top = '0px';
    document.body.appendChild(stats.dom);

    const countParticles = document.querySelector('.js-count-particles');

    const update = () => {
      stats.begin();
      stats.end();
      if (window.pJSDom && window.pJSDom[0]) {
        const particlesArray = window.pJSDom[0].pJS.particles.array.length;
        if (countParticles) countParticles.textContent = particlesArray.toString();
      }
      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);

    // Cleanup
    return () => {
      stats.dom.remove();
    };
  }, []);

  return (
    <>
      <div id="particles-js"></div>
      <div className="count-particles">
        <span className="js-count-particles">--</span> particles
      </div>
    </>
  );
}
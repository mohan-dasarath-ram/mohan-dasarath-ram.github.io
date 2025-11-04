// Particles.js config
particlesJS("particles-js", {
  "particles": {
    "number": {"value": 69, "density": { "enable": true, "value_area": 800 }},
    "color": { "value": "#39ff14" },
    "shape": {
      "type": "circle",
      "stroke": { "width": 0, "color": "#39ff14" },
      "polygon": { "nb_sides": 5 }
    },
    "opacity": {"value": 0.65, "random": true, "anim":{"enable":true, "speed":0.95,"opacity_min":0.22,"sync":false}},
    "size": {"value": 4,"random": true,"anim":{"enable":true,"speed":3.7,"size_min":1.5,"sync":false}},
    "line_linked": {"enable": true,"distance": 130,"color": "#39ff14","opacity": 0.33,"width": 1.4},
    "move": {"enable": true,"speed": 2.1,"direction": "none","random": false,"straight": false,"out_mode": "bounce","bounce": true,"attract":{"enable":false,"rotateX":3920,"rotateY":3920}}
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},
    "modes": {
      "grab": {"distance": 140,"line_linked": {"opacity": 1}},
      "bubble": {"distance": 230,"size": 6,"duration": 2,"opacity": .45,"speed": 2},
      "repulse": {"distance": 120,"duration": 0.4},
      "push": {"particles_nb": 4},
      "remove": {"particles_nb": 3}
    }
  },
  "retina_detect": true
});

// Typewriter effect
const typewriterStrings = [
  "Welcome to my futuristic website.",
  "Personal Branding • Portfolio • Digital Art",
  "Powered by Modern Vibes 🚀"
];
let txtEl = document.querySelector('.typed-text');
let i = 0, line = 0, speed = 33;

function typeWriter() {
  if(line < typewriterStrings.length) {
    if(i < typewriterStrings[line].length) {
      txtEl.innerHTML += typewriterStrings[line].charAt(i);
      i++; setTimeout(typeWriter, speed);
    } else {
      setTimeout(() => {
        txtEl.innerHTML = ""; line++; i = 0; typeWriter();
        if(line >= typewriterStrings.length) line = 0;
      }, 1500);
    }
  }
}
document.addEventListener('DOMContentLoaded', typeWriter);

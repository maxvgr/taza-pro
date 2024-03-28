import Swiper from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';

// import 'animate.css/animate.css';

import wow from '/node_modules/wow.js';
new wow().init();

import '/node_modules/wow.js/css/libs/animate.css'

import {
  Navigation,
  Autoplay,
  Mousewheel,
} from "swiper/modules";

new Swiper(".slider__menu .swiper", {
  modules: [Navigation, Autoplay],

  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,

  speed: 2000,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: "#home-page .swiper .swiper-button-next",
    prevEl: "#home-page .swiper .swiper-button-prev",
  },

});


new Swiper(".news .swiper", {
  modules: [Navigation, Autoplay],

  slidesPerView: 4,
  spaceBetween: 30,
  loop: false,

  breakpoints: {

    768: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  },

  navigation: {
    nextEl: ".news .swiper-button-next",
    prevEl: ".news .swiper-button-prev",
  },

});


new Swiper(".trustus .swiper", {
  modules: [Autoplay],

  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,

  breakpoints: {
    540: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 8,
      spaceBetween: 30
    }
  },

  speed: 1000,
  // simulateTouch: false,

  // autoplay: false,

  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },

});

let bg = document.querySelectorAll('.mouse-parallax-bg');
for (let i = 0; i < bg.length; i++){
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg[i].style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    });
}


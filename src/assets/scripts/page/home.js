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

  // breakpoints: {

  //   768: {
  //     slidesPerView: 1,
  //     spaceBetween: 0
  //   },
  //   1400: {
  //     slidesPerView: 1,
  //     spaceBetween: 0
  //   }
  // },

  speed: 2000,
  // simulateTouch: false,

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
      slidesPerView: 2,
      spaceBetween: 30
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },

  // speed: 52000,
  // simulateTouch: false,

  // autoplay: false,

  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },

  navigation: {
    nextEl: ".news .swiper-button-next",
    prevEl: ".news .swiper-button-prev",
  },

});


new Swiper(".trustus .swiper", {
  modules: [Autoplay],

  slidesPerView: 8,
  spaceBetween: 30,
  loop: true,

  // breakpoints: {

  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 30
  //   },
  //   1400: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   }
  // },

  speed: 1000,
  // simulateTouch: false,

  // autoplay: false,

  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },


});


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

new Swiper("#home-page .swiper", {
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


// const element = document.querySelector('.my-technology__left');
// element.classList.add('animate__animated', 'animate__bounceIn');


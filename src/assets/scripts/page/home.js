import Swiper from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';

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
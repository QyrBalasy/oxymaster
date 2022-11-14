import * as flsFunctions from "./modules/functions.js";
import * as accordion from "./modules/accordion.js";
import * as phoneInput from "./modules/phoneinput.js";

flsFunctions.isWebp();
accordion.showContent();
phoneInput.isPhone();

// плагины через npm устанавливаешь и модули вызываешь
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

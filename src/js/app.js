import * as flsFunctions from "./modules/functions.js";
import * as accordion from "./modules/accordion.js";
import * as phoneInput from "./modules/phoneinput.js";
import * as mymodal from "./modules/modal.js";
import * as burger from "./modules/burger.js";
import { smoothScroll } from "./modules/burger.js";

flsFunctions.isWebp();
accordion.showContent();
phoneInput.isPhone();
mymodal.modal();
burger.burgerMenuCustom();
smoothScroll();

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

// let modal = document.querySelector(".modal");
// let trigger = document.querySelectorAll(".trigger");
// let closeButton = document.querySelector(".close-button");

// function toggleModal() {
//   modal.classList.toggle("show-modal");
// }

// function windowOnClick(event) {
//   if (event.target === modal) {
//     toggleModal();
//   }
// }

// for (let i = 0; i < trigger.length; i++) {
//   trigger[i].addEventListener("click", toggleModal);
// }

// closeButton.addEventListener("click", toggleModal);
// window.addEventListener("click", windowOnClick);

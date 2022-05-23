import initMobileSwiper from "./swiper.js";
import showMoreCards from "./showMoreCards.js";

document.addEventListener("DOMContentLoaded", () => {
  initMobileSwiper(".brands__swiper.swiper");
  showMoreCards(".brands__cards", ".brands__show-more");
});
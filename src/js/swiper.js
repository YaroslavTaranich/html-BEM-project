import Swiper, { Pagination } from "swiper";

const swiperSettings = {
  modules: [Pagination],
  slidesPerView: 1.2,
  speed: 400,
  spaceBetween: 16,
  loop: true,

  breakpoints: {
    365: {
      slidesPerView: 1.3,
    },
    450: {
      slidesPerView: 1.6,
    },
    640: {
      slidesPerView: 2.4,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets"
  },
};

export default function initMobileSwiper(dataSwiperName) {
  const selector = `[data-swiper="${dataSwiperName}"]`;
  const breakpoint = 768;
  const initialWidth = window.screen.availWidth;
  let mobileSwiper;

  let isInited = false;
  if (initialWidth < breakpoint) {
    mobileSwiper = new Swiper(selector, swiperSettings);
    isInited = true;
  }

  window.addEventListener("resize", (e) => {
    const width = e.target.screen.availWidth;
    if (isInited && width >= breakpoint) {
      mobileSwiper.destroy(true, true);
      isInited = false;
    }
    if (!isInited && width < breakpoint) {
      mobileSwiper = new Swiper(selector, swiperSettings);
      isInited = true;
    }
  });
}

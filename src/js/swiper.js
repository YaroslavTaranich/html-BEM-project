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
    type: "bullets",
  },
};

export default function initMobileSwiper(dataSwiperName) {
  const selector = `[data-swiper="${dataSwiperName}"]`;
  const breakpoint = 768;
  const initialWidth = window.screen.availWidth;
  let mobileSwiper;
  let state = "destroyed";

  function initSwiper() {
    mobileSwiper = new Swiper(selector, swiperSettings);
    state = "initiated";
  }
  
  function destroySwiper() {
    mobileSwiper.destroy(true, true);
    state = "destroyed";
  }

  if (initialWidth < breakpoint) initSwiper()
  
  window.addEventListener("resize", (e) => {
    const width = e.target.screen.availWidth;
    if (state === "initiated" && width >= breakpoint) destroySwiper()    
    if (state === "destroyed" && width < breakpoint) initSwiper()
  });
}

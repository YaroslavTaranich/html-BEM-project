import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';


function initSwiper(container) {

    const swiper = new Swiper(container, {
          // Optional parameters
        slidesPerView: 1.2,
        speed: 400,
        spaceBetween: 20,
        loop: false,

        breakpoints: {
            365: {
              slidesPerView: 1.3,
            },
            450: {
              slidesPerView: 1.6,
            },
            640: {
              slidesPerView: 2.4,
            }
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        
      });

      return swiper
}

export default function initMobileSwiper(container) {
        
    const breakpoint = 768;
    const initialWidth = window.screen.availWidth;
    let brandsSwiper;
    let isInited = false;

    if (initialWidth < breakpoint) {
        brandsSwiper = initSwiper(container);
        isInited = true;
    }

    window.addEventListener('resize', (e) => {

        const width = e.target.screen.availWidth;
        
        if (isInited && width > breakpoint) {
            brandsSwiper.destroy(true, true);
            isInited = false;
        } 
        if (!isInited && width < breakpoint){
            brandsSwiper = initSwiper(container);
            isInited = true;
        }
    })
}
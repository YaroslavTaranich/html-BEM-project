import "swiper/swiper-bundle.min.css";
import "../scss/style.scss";

import popup from "./popup";
import initMobileSwiper from "./swiper.js";
import showMoreByClick from "./showMoreByClick.js";

popup("menu");
popup("feedback");
popup("callback");

showMoreByClick("text", "Читать далее");

initMobileSwiper("brands");
showMoreByClick("brands");

initMobileSwiper("services");
showMoreByClick("services");

initMobileSwiper("prices");

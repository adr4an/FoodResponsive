import { feature } from "./scripts/feature.js";
import { category } from "./scripts/menu.js";
import { click } from "./scripts/script.js";
import { productDesign } from "./scripts/dishes.js";


feature();
category();
click();
productDesign();

var mixer = mixitup('.food-menu');

var swiper = new Swiper('.swiper', {

    slidesPerView: 4,
    spaceBetween: 150,
    autoplay: {
        delay: 1200
    },
    speed: 6000,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 70,
        },
        1100: {
            slidesPerView: 2,
            spaceBetween: 120
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 170
        }
    }

});
'use strict';

const toTop = document.querySelector(".to-top-btn");

window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        toTop.classList.remove('to-top-btn--hidden');
    }else{
        toTop.classList.add('to-top-btn--hidden');
    }
});

const swiper = new Swiper(".flowSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

$(document).ready(function (){
    $(".owl-carousel").owlCarousel({
            loop:true,
            margin:20,
            responsiveClass:true,
            stagePadding: 16,
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:true
                },
                768:{
                    items:3,
                    nav:true
                },
                1000:{
                    items:4,
                    nav:true,
                    loop:false
                }
            }
        }
    );
});

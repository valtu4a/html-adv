'use strict';

const toTop = document.querySelector(".to-top-btn");

window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        toTop.classList.remove('to-top-btn--hidden');
    }else{
        toTop.classList.add('to-top-btn--hidden');
    }
});

$(document).ready(function (){
    $(".owl-carousel").owlCarousel({
            loop:true,
            margin:20,
            responsiveClass:true,
            nav:true,
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
                    items:3,
                    nav:true,
                    loop:true,
                }
            }
        }
    );
});

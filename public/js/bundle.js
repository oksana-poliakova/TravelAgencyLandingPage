document.addEventListener("DOMContentLoaded",function(){AOS.init({duration:5e3,offset:200,easing:"ease-in-out"})});let burger=document.querySelector(".burger"),navLinks=document.querySelector(".nav-links"),closeMenu=document.querySelector(".close-menu"),swiper=(burger.addEventListener("click",()=>{navLinks.classList.toggle("active")}),closeMenu.addEventListener("click",()=>{navLinks.classList.remove("active")}),document.addEventListener("click",e=>{var n=navLinks.contains(e.target),e=burger.contains(e.target);n||e||navLinks.classList.remove("active")}),new Swiper(".swiper",{slidesPerView:1,loop:!0,spaceBetween:70,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",dynamicBullets:!0}}));
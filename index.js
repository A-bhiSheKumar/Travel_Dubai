
//header scroll fixing

let header =document.querySelector('header');

let menu =document.querySelector('#menu-icon');

let navbar =document.querySelector('.navbar'); 

window.addEventListener('scroll',function(){
  header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = function() {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}


// swiper
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });

  
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // autoplay
    autoplay: {
        delay: 2000,
    },

    // If we need pagination
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Responsive breakpoints
  breakpoints: {
    320: {
        slidesPerView: 1
    },
    
    768: {
      slidesPerView: 1
    },

    1024: {
        slidesPerView: 3,
        spaceBetween: 30
    }
  },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

//modal swiper



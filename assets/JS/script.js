const swiper = new Swiper('.slider-wrapper', {
    // direction: 'horizontal',
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    scrollbar: {
        el: '.swiper-scrollbar',
    },

});
const swiper = new Swiper('.swiper', {

    slidesPerView: 1,
    spaceBetween: 0,
    // loop: true,


    pagination: {
        el: '.custom-pagination',
        clickable: true,
        // dynamicBullets: true, 
        dynamicMainBullets: 5,
    },

    autoplay: {
        delay: 5000, // Set the delay between slides in milliseconds
        disableOnInteraction: true, // Set to true to prevent autoplay when user interacts with the Swiper
    },
    speed: 1000,

    navigation: {
        nextEl: '.custom-next-button',
        prevEl: '.custom-prev-button',
    },




    on: {
        init: function () {
            const fractions = document.querySelectorAll('.custom-fraction-pagination');
            fractions.forEach((fraction, index) => {
                const totalSlides = this.slides.length;
                fraction.innerHTML = `<span class="current">0${index + 1}</span><span class="total">0${totalSlides}</span>`;
            });
        },
        slideChange: function () {
            const fractions = document.querySelectorAll('.custom-fraction-pagination');
            fractions.forEach((fraction, index) => {
                const totalSlides = this.slides.length;
                fraction.innerHTML = `<span class="current">0${this.activeIndex + 1}</span><span class="total">0${totalSlides}</span>`;
            });
        },
    },

});




let yellowBtns = document.querySelectorAll('.yellowBtn');

yellowBtns.forEach(yellowBtn =>{
    yellowBtn.addEventListener('click', () => {
        yellowBtn.classList.toggle('yellowBtn-clicked');
        let parentElement = yellowBtn.parentElement;
        let leftbtnabout = parentElement.querySelector('.left-btn-about')
        leftbtnabout.classList.toggle('left-btn-about-none')
    })
})


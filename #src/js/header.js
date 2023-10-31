let iconMenu = document.querySelector('.icon-menu');
let menuConteiner = document.querySelector('.menu-conteiner');
let headerMenuBtn = document.querySelector('.header-menu-btn');

iconMenu.addEventListener('click', () => {
    menuConteiner.classList.toggle('menu-conteiner-visible');

    if(menuConteiner.classList.contains('menu-conteiner-visible')){
        headerMenuBtn.src = 'img/header/hrest.svg';
    }
    else{
        headerMenuBtn.src = 'img/header/menu.svg';
    }
})


// -----------------------------------------------------

const form = document.querySelector('.contact-container');
const nameInput = document.querySelector('.input-name');
const phoneInput = document.querySelector('.input-number');
const errorMessages = document.querySelectorAll('.error-message');

form.addEventListener('submit', function (event) {
    event.preventDefault();


    if (nameInput.value.trim() === '') {
        nameInput.style.borderBottom = '1px solid red';
        errorMessages[0].style.display = 'block';
    } else {
        nameInput.style.borderBottom = '1px solid lightgrey';
        errorMessages[0].style.display = 'none';
    }


    if (phoneInput.value.trim() === '') {
        phoneInput.style.borderBottom = '1px solid red';
        errorMessages[1].style.display = 'block';
    } else {
        phoneInput.style.borderBottom = '1px solid lightgrey';
        errorMessages[1].style.display = 'none';
    }

    if (nameInput.value.trim() !== '' && phoneInput.value.trim() !== '') {
        // Ви можете вставити код для надсилання форми на сервер, якщо все валідно.
        // Після надсилання можна перейти на іншу сторінку.
        window.location.href = 'popUpThank.html';
    }

});

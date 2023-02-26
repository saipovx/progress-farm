// Custom scripts

function bindModal(trigger, modal, close) {
  (trigger = document.querySelectorAll(trigger)),
    (modal = document.querySelector(modal)),
    (close = document.querySelector(close));

  const body = document.body;


  trigger.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
      body.classList.add("locked");
    });
  });



  close.addEventListener("click", () => {
    modal.style.display = "none";
    body.classList.remove("locked");
  });

  
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      body.classList.remove("locked");
    }
  });
}

// ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
// ВТОРОЙ аргумент - класс самого модального окна.
// ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
bindModal(".button", ".modal__wrapper", ".modal__block");

// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
  }
  burgerMenu()
  

  const swiper = new Swiper('.swiper__aboutus', {
  

    pagination: {
      el: '.swiper-pagination',
    },
    
    spaceBetween: 30,

  });


  const swiper6 = new Swiper('.swiper__news', {
  


    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,


        breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },

    380: {
      slidesPerView: 1.4,
      spaceBetween: 10
    },

    // when window width is >= 480px
    480: {
      slidesPerView: 2.4,
      spaceBetween: 10
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 10
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 10
    },

    1450: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    
  }


  });
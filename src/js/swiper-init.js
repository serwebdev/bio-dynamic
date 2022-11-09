const swiper1 = new Swiper('.hero__slider', {
  // Optional parameters
  // Количество слайдов на просмотр (слайды, видимые одновременно в контейнере слайдера)
  slidesPerView: 1,

  direction: 'vertical',

  // Установите количество слайдов, чтобы определить и включить групповое слайдирование. Полезно использовать со slidesPerView > 1
  slidesPerGroup: 1,

  // Расстояние между слайдами в px
  spaceBetween: 30,

  // Скорость перелистывания
  // speed: 300,

  //   Установите, true чтобы включить режим непрерывного цикла
  loop: true,

  // Автопрокрутка
  autoplay: {
    // Задержка между переходами (в мс). Если этот параметр не указан, автовоспроизведение будет отключено.
    delay: 3000,
    // Установите false и автовоспроизведение не будет отключено после взаимодействия с пользователем (пролистывания), оно будет перезапускаться каждый раз после взаимодействия
    disableOnInteraction: false,
    // Когда включено, автовоспроизведение будет приостановлено при вводе мыши над контейнером Swiper. Если disableOnInteractionтакже включен, он остановит автовоспроизведение вместо паузы
    pauseOnMouseEnter: true,
  },

  // Брейкпоинты (точки останова)
  //   breakpoints: {
  //     // when window width is >= 320px
  //     320: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     // when window width is >= 480px
  //     480: {
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //     },
  //     // when window width is >= 640px
  //     640: {
  //       slidesPerView: 4,
  //       spaceBetween: 40,
  //     },
  //   },

  //   Индек начального слайда
  //   initialSlide: 0,

  // Добавить (в пикселях) дополнительное смещение слайда в конце контейнера (после всех слайдов)
  // slidesOffsetAfter: 100,

  // Добавить (в пикселях) дополнительное смещение слайда в начале контейнера (перед всеми слайдами)
  // slidesOffsetBefore: 100,

  // If we need pagination
  pagination: {
    el: '.hero__slider-pagination',
    clickable: true,
    // Строка с типом разбиения на страницы. Может быть 'bullets', 'fraction' или 'progressbar' 'custom'
    // type: "bullets",
  },
});

// swiper2========================================================================
(function () {
  const swiper2 = new Swiper('.slider2', {
    // Optional parameters
    // Количество слайдов на просмотр (слайды, видимые одновременно в контейнере слайдера)
    slidesPerView: 5,

    // Установите количество слайдов, чтобы определить и включить групповое слайдирование. Полезно использовать со slidesPerView > 1
    slidesPerGroup: 1,

    // Расстояние между слайдами в px
    spaceBetween: 30,

    // Скорость перелистывания
    // speed: 300,

    //   Установите, true чтобы включить режим непрерывного цикла
    loop: true,

    // Брейкпоинты (точки останова)
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1300: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },

    // If we need pagination
    pagination: {
      el: '.slider2__pagination',
      clickable: true,
      // Строка с типом разбиения на страницы. Может быть 'bullets', 'fraction' или 'progressbar' 'custom'
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  function addClassVisibleSlides() {
    swiper2.slides.forEach(item => {
      item.classList.remove(
        'visible-slide--1',
        'visible-slide--2',
        'visible-slide--3',
        'visible-slide--4',
        'visible-slide--5'
      );
    });

    swiper2.slides[swiper2.activeIndex].classList.add('visible-slide--1');
    swiper2.slides[swiper2.activeIndex + 1]?.classList.add('visible-slide--2');
    swiper2.slides[swiper2.activeIndex + 2]?.classList.add('visible-slide--3');
    swiper2.slides[swiper2.activeIndex + 3]?.classList.add('visible-slide--4');
    swiper2.slides[swiper2.activeIndex + 4]?.classList.add('visible-slide--5');
  }

  addClassVisibleSlides();

  swiper2.on('slideChange', function () {
    addClassVisibleSlides();
  });
})();

// ИНИЦИАЛИЗАЦИЯ СЛАЙДЕРА ПРЕДЛОЖЕНИЙ
$(document).ready(function () {
    $('.best-offers__slider.owl-carousel').owlCarousel({
        nav: true, //Вывод кнопок
        navText: ['<img src="assets/img/assets/arrow-left.png" alt="Левая стрелка"></img>', '<img src="assets/img/assets/arrow-right.png" alt="Правая стрелка"></img>'],
        loop: true, //Зацикливаем слайдер
        margin: 10, //Отступ от картино если выводите больше 1
        smartSpeed: 1000, //Время движения слайда
        responsive: { //Адаптация в зависимости от разрешения экрана
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1800: {
                items: 4
            }
        }
    });
});

$(document).ready(function () {
    // ИНИЦИАЛИЗАЦИЯ СЛАЙДЕРА ОТЗЫВОВ
    $('.reviews__slider.owl-carousel').owlCarousel({
        nav: true, //Вывод кнопок
        navText: ['<img src="assets/img/assets/arrow-left.png" alt="Левая стрелка"></img>', '<img src="assets/img/assets/arrow-right.png" alt="Правая стрелка"></img>'],
        loop: true, //Зацикливаем слайдер
        margin: 20, //Отступ от картино если выводите больше 1
        smartSpeed: 1000, //Время движения слайда
        responsive: { //Адаптация в зависимости от разрешения экрана
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1200: {
                items: 3
            },
            1800: {
                items: 4
            }
        }
    });
});

// РАЗВОРОТ ОТЗЫВА ПРИ НАЖАТИИ КНОПКИ "ЧИТАТЬ"
jQuery(document).ready(function(){
                                
    $(function() {
    $("a.expand").click(function() {
    $(this).parent().toggleClass('expanded');
        })
    });
    });
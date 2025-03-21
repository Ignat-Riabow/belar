document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const sidebar = document.getElementById("sidebar");
    const dropdownBtns = document.querySelectorAll(".dropdown-btn");

    // Открытие бокового меню
    menuBtn.addEventListener("click", function () {
        sidebar.style.left = "0"; // Панель выезжает влево
    });

    // Закрытие бокового меню
    closeBtn.addEventListener("click", function () {
        sidebar.style.left = "-250px"; // Панель уходит влево
    });

    // Закрытие меню при клике вне его
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
            sidebar.style.left = "-250px"; // Панель уходит, если кликнули вне
        }
    });

    // Разворачивание текстовых блоков с анимацией
    dropdownBtns.forEach(button => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.opacity = "0";
            } else {
                document.querySelectorAll(".dropdown-content").forEach(el => {
                    el.style.maxHeight = null;
                    el.style.opacity = "0";
                });

                content.style.maxHeight = content.scrollHeight + "px";
                content.style.opacity = "1";
            }
        });
    });
});

function smoothScroll(event, targetId) {
    event.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  }
  // script.js
let lastScrollTop = 0;
const topBar = document.querySelector('.top-bar');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Прокрутка вниз — скрываем хедер и fast-10-klass
    if (currentScroll > lastScrollTop) {
        topBar.style.top = "-80px"; // Высота хедера (можно настроить)
    } else {
        // Прокрутка вверх — показываем хедер и fast-10-klass
        topBar.style.top = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Для поддержки прокрутки вверх
});

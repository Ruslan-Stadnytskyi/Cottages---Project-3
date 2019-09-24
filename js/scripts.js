'use strict';
window.onload = function () {
    function open() {
        document.querySelector('.body').classList.toggle('menu-opened');
    }

    document.querySelector('.open-menu').addEventListener("click", open);
    document.querySelector('.fader').addEventListener("click", open);
    let arr = document.querySelectorAll('.close-menu');
    for (const value of arr) {
        value.addEventListener("click", open);

        const anchors = document.querySelectorAll('a[href*="#"]');

        for (let anchor of anchors) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const blockID = anchor.getAttribute('href').substr(1);
                document.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        }
    }

    function initMap() {
        const uluru = {lat: 49.843670, lng: 24.026232};
        const map = new google.maps.Map(
            document.getElementById('map'), {zoom: 11, center: uluru});
        new google.maps.Marker({position: uluru, map: map});
    }

    initMap();
    let scrolled;
    let timer;
    document.querySelector('.to-top').onclick = function () {
        scrolled = window.pageYOffset;
        scrollToTop();
    };

    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 10;
            timer = setTimeout(scrollToTop, 3);
        } else {
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    }
};
window.addEventListener('scroll', function () {
    if (pageYOffset > 220) {
        document.querySelector("body").classList.add("active");
    } else {
        document.querySelector("body").classList.remove("active");
    }
});

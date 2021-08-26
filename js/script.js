document.querySelector('.nav-button').onclick = (event) => {
    document.querySelector('.mobile-nav').classList.toggle('mobile-nav-active');
    document.querySelector('.nav-button-icon').classList.toggle('nav-button-icon-close');
    document.body.classList.toggle('no-scroll');
    event.stopPropagation();
};


window.addEventListener('click', function () {
    if (document.querySelector('.mobile-nav').classList.contains('mobile-nav-active')) {

        document.querySelector("body").classList.toggle('no-scroll');
        document.querySelector('.nav-button-icon').classList.toggle('nav-button-icon-close');
        document.querySelector('.mobile-nav').classList.toggle('mobile-nav-active');

    }

});

document.querySelector('.mobile-nav').addEventListener('click', function (event) {
    event.stopPropagation();
})
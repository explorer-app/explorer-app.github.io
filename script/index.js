window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    if (window.scrollY >= 50 || window.pageYOffset >= 50) {
        header.classList.add('down');
    } else {
        header.classList.remove('down');
    }
});
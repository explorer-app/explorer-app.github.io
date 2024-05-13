window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    // var make_top = document.getElementById('make-top');
    if (window.scrollY >= 50 || window.pageYOffset >= 50) {
        header.classList.add('down');
        make_top.classList.remove('hide');
    } else {
        make_top.classList.add('hide');
        header.classList.remove('down');
    }
});

function showNav(){
    let nav = document.querySelector('.nav-link');
    nav.classList.toggle('showNav');
}
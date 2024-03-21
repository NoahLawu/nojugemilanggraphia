const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

window.onscroll = function () {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop //must be 0 when page not scrolling down
    window.scrollY > fixedNav ? header.classList.add('navbar-fixed') : header.classList.remove('navbar-fixed')
}
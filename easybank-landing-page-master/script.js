const menuBtn = document.querySelector('.menu__btn');
const overlay = document.querySelector('.overlay');
const navBox = document.querySelector('.header__links');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open')
    overlay.classList.add('active')
    overlay.classList.remove('inActive', 'faded')
    navBox.classList.add('active')
    navBox.classList.remove('inActive', 'faded')
    menuOpen = true
  } else {
    menuBtn.classList.remove('open')
    overlay.classList.remove('active')
    overlay.classList.add('inActive', 'faded')
    navBox.classList.remove('active')
    navBox.classList.add('inActive', 'faded')
    menuOpen = false
  }
});
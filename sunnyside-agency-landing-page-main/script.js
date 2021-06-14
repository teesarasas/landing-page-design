const showNavLink = () => {
  const hamburger = document.querySelector("#hamburger");
  const navBox = document.querySelector('#navlink');

  hamburger.addEventListener('click', () => {
    navBox.classList.toggle('active')
    }
  )
}

showNavLink()
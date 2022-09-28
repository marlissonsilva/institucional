// MENU MOBILE
const btnMobile = document.querySelector('#menu_hamburguer')
function showMenu(event) {
      if (event.type === 'touchstart') event.preventDefault()
      const nav = document.querySelector('.nav')
      nav.classList.toggle('active')
}
btnMobile.addEventListener('touchstart', showMenu)
btnMobile.addEventListener('click', showMenu)
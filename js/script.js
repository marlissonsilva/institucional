// MENU MOBILE
const btnMobile = document.querySelector('#menu_hamburguer')
function showMenu(event) {
      if (event.type === 'touchstart') event.preventDefault()
      const nav = document.querySelector('.nav')
      nav.classList.toggle('active')
}
btnMobile.addEventListener('touchstart', showMenu)
btnMobile.addEventListener('click', showMenu)

// HIDE MENU ON CLICK
const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach(item => {
      item.addEventListener('click', hideMenu);
})

function hideMenu(event) {
      if (event.type === 'touchstart') event.preventDefault()
      const nav = document.querySelector('.nav')
      nav.classList.remove('active')
}


// SCROLL MENU
menuItems.forEach(item => {
      item.addEventListener('click', scrollClick);
})

function scrollClick(event) {
      event.preventDefault();
      const element = event.target;
      const id = element.getAttribute('href')
      const to = document.querySelector(id).offsetTop;

      window.scroll({
            top: to - 65,
            behavior: "smooth",
      })
}

// 





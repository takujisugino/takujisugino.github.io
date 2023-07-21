(() => {
  const toggleMenu = () => {
    document.querySelector('.header__menu-button')?.classList?.toggle('header__menu-button_opened')
    document.querySelector('.header__nav')?.classList?.toggle('header__nav_opened')
    document.body?.classList?.toggle('menu-opened')
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('menuButton').addEventListener('click', toggleMenu)
    document.querySelectorAll('.header__link_nav').forEach(e => e.addEventListener('click', toggleMenu))
  })
})()
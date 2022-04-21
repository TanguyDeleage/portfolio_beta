const hamburger = document.querySelector('.navbar');
const navLink = document.querySelector('.hzmburger-menu');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

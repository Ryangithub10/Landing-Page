const hamburgerMenu = document.getElementById('hamburger-menu');
const linkContent = document.getElementById('link-content');
const nav = document.getElementById('nav');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('exit');
  linkContent.classList.toggle('active');
  nav.classList.toggle("change-bg-color");
});

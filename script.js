const hamburgerMenu = document.getElementById('hamburger-menu');
const linkContent = document.getElementById('link-content');
const nav = document.getElementById('nav');
const btn = document.getElementById('button');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('exit');
  hamburgerMenu.classList.toggle('change-color');
  linkContent.classList.toggle('active');
  nav.classList.toggle("change-bg-color");
  btn.classList.toggle('change-color');
});

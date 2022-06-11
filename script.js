const hamburgerMenu = document.getElementById('hamburger-menu');
const linkContent = document.getElementById('link-content');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('exit');
});

const btn = document.querySelector('.btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('menuM');
});
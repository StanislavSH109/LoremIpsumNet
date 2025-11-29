export function initBurger() {
  const burger = document.querySelector('.burger');
  const sideMenu = document.querySelector('.side-menu');
  if (!burger) return; 
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    sideMenu.classList.toggle('active');
  });
}
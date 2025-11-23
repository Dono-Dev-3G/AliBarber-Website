const hamburger = document.getElementById('hamburger');
const dropdownMenu = document.getElementById('dropdownMenu');


hamburger.addEventListener('click', (e) => {
  e.stopPropagation(); 
  dropdownMenu.classList.toggle('show');
});


dropdownMenu.addEventListener('click', (e) => {
  e.stopPropagation();
});


document.addEventListener('click', () => {
  dropdownMenu.classList.remove('show');
});
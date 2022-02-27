const profile = document.querySelector('#click_profile');
let menu_hover_profile = document.querySelector('#button_hover');
profile.addEventListener('click', () => {
  menu_hover_profile.classList.toggle('active');
});
let closeModal = document.querySelector('.close');
let modal = document.querySelector('#modal');

closeModal.addEventListener('click', () => {
  modal.style = `display:none`;
})

let opennav = document.querySelector('.opennav');
let mobilMenu = document.querySelector('#mobil-menu');
let body = document.querySelector('#body');

opennav.addEventListener('click', () => {

if(mobilMenu){
  mobilMenu.classList.toggle('active')
}
})


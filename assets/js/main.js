let closeModal = document.querySelector('.close');
let modal = document.querySelector('#modal');

closeModal.addEventListener('click', () => {
  modal.style = `display:none`;
})

let opennav = document.querySelector('.opennav');
let mobilMenu = document.querySelector('#mobil-menu');
let body = document.querySelector('#body');

opennav.addEventListener('click',() => {
  mobilMenu.classList.add('active')
})

let navLink = document.querySelectorAll('.navLink');

navLink.forEach((n) => n.addEventListener("click", () => {
  mobilMenu.classList.remove('active')
}));

window.addEventListener('scroll', () => {
  let header = document.querySelector('#header');
  if(window.scrollY < 300){
    header.classList.remove('active')
  }else{
    header.classList.add('active')
  }
})



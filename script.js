let members = document.querySelector('.members');
let dropdown = document.querySelector('.drop-down');

members.onclick = () => {
     dropdown.classList.toggle('active');
}

let menu = document.querySelector('.fa-bars');
let link = document.querySelector('.right');

menu.onclick = () => {
     link.classList.toggle('active');
     menu.classList.toggle('fa-times');
}
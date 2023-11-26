// const intro = new Audio("./assets/intro-4k-60fps");
// intro.loop = true;
// intro.volume = 0.5;


const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
let button=document.getElementById('start')
button.addEventListener('click',(e)=>{
  e.preventDefault();
  const Name=document.getElementById('UN').value
  const nickname=document.getElementById('NN').value
  if(Name!=='' && nickname!==''){
      location.href="./main.html";
  } else{
      alert("Please, Fill your name and nickname");
  }
  localStorage.setItem('UN',Name)
  localStorage.setItem('NN',nickname)
});

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
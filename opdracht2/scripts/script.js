// JavaScript Document

/**********************/
/* DRAGGEN EN DROPPEN */
/**********************/
var vorigeWeek = document.querySelector("main ol li:nth-of-type(1) ul");
var dezeWeek = document.querySelector("main ol li:nth-of-type(2) ul");
var volgendeWeek = document.querySelector("main ol li:nth-of-type(3) ul");
var galerijLijst = document.querySelector("section ul");


/**********************/
/* DRAGGEN EN DROPPEN */
/**********************/
new Sortable(galerijLijst, {
	group: {
		name: 'fotoLijstjes', // zelfde naam als bij favoLijstje
		pull: 'clone' // er wordt een kopie gemaakt
	},
	sort: false, // de foto kunnen in de lijst zelf niet gesorteerd worden
	animation: 300 // een kleine animatie als een foto van plek wisselt
});

new Sortable(vorigeWeek, {
	group: {
		name: 'fotoLijstjes', // zelfde naam als bij allesLijstje
		pull: 'false' // foto's kunnen niet uit de favo lijst gesleept worden
	},
	animation: 300 // een kleine animatie als een foto van plek wisselt
});

new Sortable(dezeWeek, {
	group: {
		name: 'fotoLijstjes', // zelfde naam als bij allesLijstje
		pull: 'false', // foto's kunnen niet uit de favo lijst gesleept worden
		dragoverBubble: false
	},
	animation: 300 // een kleine animatie als een foto van plek wisselt
});

new Sortable(volgendeWeek, {
	group: {
		name: 'fotoLijstjes', // zelfde naam als bij allesLijstje
		pull: 'false' // foto's kunnen niet uit de favo lijst gesleept worden
	},
	animation: 100 // een kleine animatie als een foto van plek wisselt
});

/**********************/
/* venster */
/* bron: https://www.youtube.com/watch?v=MBaw_6cPmAw */
/**********************/


// Aanroepen van de button
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')

// Aanroepen overlaagje
const overlay = document.getElementById('overlay')

// Bij elke keer klikken wordt data geactiveert van de aside
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

// Activeert de overlay
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('aside.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

// Wordt de aside gesloten bij click
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('aside')
    closeModal(modal)
  })
})

// Als aside null is dan actief
function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

// Als aside niet nul is dan verwijderen
function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
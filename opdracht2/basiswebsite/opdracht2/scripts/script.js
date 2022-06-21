// JavaScript Document

/**********************/
/* DRAGGEN EN DROPPEN */
/**********************/
var vorigeWeek = document.querySelector("main ol li:nth-of-type(1) ul");
var dezeWeek = document.querySelector("main ol li:nth-of-type(2) ul");
var volgendeWeek = document.querySelector("main ol li:nth-of-type(3) ul");
var galerijLijst = document.querySelector("section ul");

/**********************/
/* Carousel */
/**********************/

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
/* Carousel */
/*Bron: https://www.youtube.com/watch?v=gBzsE0oieio*/
/*Bron: https://www.youtube.com/watch?v=VYsVOamdB0g*/
/**********************/

// const track = document.querySelector('.carousel_track');
// const slides = Array.from(track.children);
// const nextButton = document.querySelector('.carousel_button--right');
// const prevButton = document.querySelector('.carousel_button--left'); 
// const dotsNav = document.querySelector('.carousel_nav');
// const dots = Array.from(dotsNav.children);

// const slideWidth = slides[0].getBoundingClientRect().width;

// const setSlidePosition = (slide, index) => {
// 	slide.style.left = slideWidth * index + 'px';
// };
// slides.forEach(setSlidePosition);

// const moveToSlide = (track, currentSlide, targetSlide) =>{
// 	track.style.transform = 'translateX (-'+ targetSlide.style.left + ')';
// 	currentSlide.classList.remove('current-slide');
// 	targetSlide.classList.add('current-slide');
// }

// const updateDots = (currentDot, targetDot) => {
// 	currentDot.classList.remove('current-slide');
// 	targetDot.classList.add('current-slide');
// }

// const hideShowArrows = () => {
// 	if (targetIndex === 0) {
// 		prevButton.classList.add('is-hidden');
// 		nextButton.classList.remove('is-hidden');
// 	}else if (targetIndex === slides.length - 1){
// 		prevButton.classList.remove('is-hidden');
// 		nextButton.classList.add('is-hidden');
// 	}else{
// 		prevButton,classlist.remove('is-hidden');
// 		nextButton,classlist.remove('is-hidden');
// 	}
// }

// prevButton.addEventListener('click', e =>{
// 	const currentSlide = track.querySelector('.current-slide');
// 	const prevSlide = currentSlide.previousElementSibling;
// 	const currentDot = dotsNav.querySelector('.current-slide');
// 	const prevDot = currentDot.previousElementSibling;
// 	const prevIndex = slides.findIndex(slide => slide === prevSlide);

// 	moveToSlide(track, currentSlide, prevSlide);
// 	updateDots(currentDot, prevDot);
// 	hideShowArrows(slides, prevButton, nextButton, prevIndex);
// });

// nextButton.addEventListener('click', e =>{
// 	const currentSlide = track.querySelector('.current-slide');
// 	const nextSlide = currentSlide.nextElementSibling;
// 	const currentDot = dotsNav.querySelector('.current-slide');
// 	const nextDot = currentDot.nextElementSibling;
// 	const nextIndex = slides.findIndex(slide => slide === nextSlide);

// 	moveToSlide(track, currentSlide, nextSlide);
// 	updateDots(currentDot, nextDot);
// 	hideShowArrows(slides, prevButton, nextButton, nextIndex);
// });

// dotsNav.addEventListener('click', e =>{
// const targetDot = e.target.closest('button');

// if (!targetDot) return;

// const currentSlide = track.querySelector('.current-slide');
// const currentDot = dotsNav.querySelector('.current-slide');
// const targetIndex = dots.findIndex(dot => dot === targetDot);
// const targetSlide = slides[targetIndex];

// moveToSlide(track, currentSlide, targetSlide);
// updateDots(currentDot, targetDot);
// hideShowArrows(slides, prevButton, nextButton, targetIndex);


// })

/**********************/
/* venster */
/* bron: https://www.youtube.com/watch?v=MBaw_6cPmAw */
/**********************/

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

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
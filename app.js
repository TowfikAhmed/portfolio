function activateNav() {
	burger = document.querySelector('.burger');
	burger.classList.toggle('active-burger');

	nav = document.querySelector('.nav-links');
	nav.classList.toggle('active-nav');
}
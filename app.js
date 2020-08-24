function activateNav() {
	burger = document.querySelector('.burger');
	burger.classList.toggle('active-burger');

	navLinks = document.querySelector('.nav-links');
	navLinks.classList.toggle('active-nav');

	navBar = document.querySelector('.nav-bar');
	navBar.classList.toggle('active-nav-bar');
}



gsap.to('.nav-bar',{
	scrollTrigger:{
		trigger:'.nav-bar',
		start:'bottom 15%', 
		end:'bottom 15%',  
		startTrigger:"center center",
		toggleActions: 'play none reverse none',  
	},
	height:'10vh',
	backgroundColor:'#5D8E94',
	color: 'white',
	ease:'slow',
	duration:.5,
});


gsap.to('.logo-cont',{
	scrollTrigger:{
		trigger:'.nav-bar',
		start:'bottom 15%', 
		end:'bottom 15%',  
		startTrigger:"center center",
		toggleActions: 'play none reverse none', 
	},
	fontSize:'2rem',
	ease:'slow',
	duration:.5,
});


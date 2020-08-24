function activateNav() {
	window.scrollTo(0, 0);
	burger = document.querySelector('.burger');
	burger.classList.toggle('active-burger');

	nav = document.querySelector('.nav-links');
	nav.classList.toggle('active-nav');
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


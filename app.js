function activateNav() {
	burger = document.querySelector('.burger');
	burger.classList.toggle('active-burger');

	nav = document.querySelector('.nav-links');
	nav.classList.toggle('active-nav');
}



gsap.to('.nav-bar',{
	scrollTrigger:{
		trigger:'.nav-bar',
		start:'bottom 15%', 
		end:'bottom 18%',  
		startTrigger:"center center",
		scrub:1, 
	},
	height:'10vh',
	backgroundColor:'#5D8E94',
	color: 'white',
	ease:'slow',
	duration:2,
});


gsap.to('.logo-cont',{
	scrollTrigger:{
		trigger:'.nav-bar',
		start:'bottom 15%', 
		end:'bottom 15%',  
		startTrigger:"center center",
		scrub:1,  
	},
	fontSize:'2rem',
	duration:2,
	ease:'slow',
});


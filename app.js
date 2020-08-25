/*================
     NAVIGATION
=================*/

function activateNav() {
	window.scrollTo(0, 0);
	burger = document.querySelector('.burger');
	burger.classList.toggle('active-burger');

	navLinks = document.querySelector('.nav-links');
	navLinks.classList.toggle('active-nav');

	navBar = document.querySelector('.nav-bar');
	navBar.classList.toggle('active-nav-bar');
}

gsap.to('.nav-bar',{
	scrollTrigger:{
		trigger:'.presentation',
		start:'18% 16%', 
		end:'18% 16%',  
		startTrigger:"center center",
		toggleActions: 'play none reverse none',
	},
	height:'10vh',
	backgroundColor:'#f4f7f6',
	boxShadow: '1px 0px 5px rgba(0,0,0,.2)',
	ease:'back',
	duration:.5,
});


// gsap.to('.logo-cont',{
// 	scrollTrigger:{
// 		trigger:'.nav-bar',
// 		start:'bottom 16%', 
// 		end:'bottom 16%',  
// 		startTrigger:"center center",
// 		toggleActions: 'play none reverse none', 
// 	},
// 	fontSize:'2rem',
// 	ease:'back',
// 	duration:.5,
// });

/*------------navigation ends------------*/

const tl = gsap.timeline({repeat:-1, repeatDelay:0});
tl.to("#quote", {
	duration: 2, 
	delay:1,
	text:"Web Developer",  
})
.to("#quote", {
	duration: 2, 
	delay:1,
	text:"Web Animator", 
})
.to("#quote", {
	duration: 2, 
	delay:1,
	text:"US/UI Designer", 
})
.to("#quote", {
	duration: 2, 
	delay:1,
	text:"Web Designer", 
});


 

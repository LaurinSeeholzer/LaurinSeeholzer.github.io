var hero = document.getElementById('hero-section');
var hello = document.getElementById('hello-section');
var projects = document.getElementById('projects-section');

function fadeOutOnScroll(element) {
	if (!element) {
		return;
	}
	
	var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
	var elementHeight = element.offsetHeight;
    var scrollTop = document.documentElement.scrollTop;
    if (element.getAttribute("id") === "hero") {
        scrollTop = scrollTop * 2
    }
	
	var opacity = 1;
	
	if (scrollTop > distanceToTop) {
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
	}
	
	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}

function scrollHandler() {
	fadeOutOnScroll(hero);
    fadeOutOnScroll(hello);
}

window.addEventListener('scroll', scrollHandler);
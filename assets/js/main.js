const image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	delay: .4,
    scale: 2.5,
    transition: 'cubic-bezier(0,0,0,1)',
});
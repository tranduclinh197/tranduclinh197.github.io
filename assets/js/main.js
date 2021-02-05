const acctive__now = document.getElementsByClassName('acctive__now');
const friends = document.getElementsByClassName('friends');
const friends_2 = document.getElementsByClassName('friends_2');


new simpleParallax(acctive__now, {
	transition: 'cubic-bezier(0,0,0,1)'
});

new simpleParallax(friends, {
	maxTransition: 100
});

new simpleParallax(friends_2, {
});

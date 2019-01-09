function openDest(){

	var items = document.getElementById('more_item').style.display;
	if (items == 'none') {
		document.getElementById('more_item').style.display = 'flex';
	}else{
		document.getElementById('more_item').style.display = 'none';
	}
	
}

function openBoats(){

	var items = document.getElementById('more_boats').style.display;
	if (items == 'none') {
		document.getElementById('more_boats').style.display = 'flex';
	}else{
		document.getElementById('more_boats').style.display = 'none';
	}
	
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
		document.getElementById("goToTop").style.display = "block";
	} else {
		document.getElementById("goToTop").style.display = "none";
	}
}

// function topFunction() {
// 	document.body.scrollTop = 0;
// 	document.documentElement.scrollTop = 0;
// }

var timeOut;
function topFunction() {
	if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
		window.scrollBy(0,-50);
		timeOut=setTimeout('topFunction()',10);
	}
	else clearTimeout(timeOut);
}



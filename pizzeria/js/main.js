window.onscroll = function(){
	alert("teste");
	var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	// console.log(scrollTop);

	let element_topPos = document.getElementById("aboutus").getBoundingClientRect().top;
	console.log(element_topPos);
};

document.getElementsByClassName("wrapper")[0].onscroll = function(){
	var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	// console.log(scrollTop);

	let element_topPos = document.getElementById("aboutus").getBoundingClientRect().top;
	console.log(element_topPos);
}
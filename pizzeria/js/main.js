document.getElementsByClassName("wrapper")[0].onscroll = function(){
	var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	// console.log(scrollTop);

	let element_topPos = document.getElementById("aboutus").getBoundingClientRect().top;
	console.log(element_topPos);

	if(element_topPos < 50){
		document.getElementsByClassName("menu_container")[0].classList.add("menu_container_small");
		document.getElementsByClassName("menu")[0].classList.add("menu_small");
		document.getElementsByClassName("logo")[0].classList.add("logo_small");
		document.getElementsByClassName("menu_item")[0].classList.add("menu_item_small");
		document.getElementsByClassName("menu_item")[1].classList.add("menu_item_small");
		document.getElementsByClassName("menu_item")[2].classList.add("menu_item_small");
		document.getElementsByClassName("menu_item")[3].classList.add("menu_item_small");
	}else{
		document.getElementsByClassName("menu_container")[0].classList.remove("menu_container_small");
		document.getElementsByClassName("menu")[0].classList.remove("menu_small");
		document.getElementsByClassName("logo")[0].classList.remove("logo_small");
		document.getElementsByClassName("menu_item")[0].classList.remove("menu_item_small");
		document.getElementsByClassName("menu_item")[1].classList.remove("menu_item_small");
		document.getElementsByClassName("menu_item")[2].classList.remove("menu_item_small");
		document.getElementsByClassName("menu_item")[3].classList.remove("menu_item_small");
	}
}
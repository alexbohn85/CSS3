
function addMenuDesktopOnScroll(){	
	document.getElementsByClassName("wrapper")[0].onscroll = function(){
		var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

		let element_topPos = document.getElementById("aboutus").getBoundingClientRect().top;
		// console.log(element_topPos); // debug

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
}

function removeMenuDesktopOnScroll(){
	document.getElementsByClassName("wrapper")[0].onscroll = '';
}

function myEventMedia(media_tablet = null, media_desktop = null) {
	
	if(media_tablet != null){
		if(media_tablet.matches){
			addMenuDesktopOnScroll();
		} else {
			removeMenuDesktopOnScroll();
		}
	}

	if(media_desktop != null){
		if(media_desktop.matches){
			addMenuDesktopOnScroll();
		} else {
			removeMenuDesktopOnScroll();
		}
	}
}

let media_desktop = window.matchMedia('(min-width: 992px)');
media_desktop.onchange = myEventMedia(null,media_desktop);

let media_tablet = window.matchMedia('(min-width: 768px)');
media_tablet.addEventListener("change", myEventMedia);

myEventMedia(media_tablet, media_desktop); // call on start
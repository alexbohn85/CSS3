// jQuery scroll animation
$('a').click(function() {
    $('html, body').animate({
        scrollTop: ($($(this).attr('href')).offset().top - 50)
    }, 1000);
    return false;
});


function addMenuDesktopOnScroll(){	
		window.onscroll = function(){ 
			var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

			let element_topPos = document.getElementById("aboutus").getBoundingClientRect().top;
			// console.log(element_topPos); // debug

			if(element_topPos < 100){
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
	window.onscroll = '';
}

function myEventMedia(media_tablet = null, media_desktop = null) {
	
	if(media_tablet != null){
		if(media_tablet.matches){
			addMenuDesktopOnScroll();
		} else {
			removeMenuDesktopOnScroll();
		}
	}

	// if(media_desktop != null){
	// 	if(media_desktop.matches){
	// 		addMenuDesktopOnScroll();
	// 	} else {
	// 		removeMenuDesktopOnScroll();
	// 	}
	// }
}


let media_tablet = window.matchMedia('(min-width: 768px)');
media_tablet.addEventListener("change", myEventMedia);

myEventMedia(media_tablet); // call on start
// Constants and Variables
const slide_right = 1;
const slide_left = -1;
const slide_delay = 3000;
let slideIndex = 1;



showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	if(n<0){
		document.getElementsByClassName("mySlides")[0].classList.remove("slideInRight");
		document.getElementsByClassName("mySlides")[0].classList.add("slideInLeft");
		document.getElementsByClassName("mySlides")[1].classList.remove("slideInRight");
		document.getElementsByClassName("mySlides")[1].classList.add("slideInLeft");
		document.getElementsByClassName("mySlides")[2].classList.remove("slideInRight");
		document.getElementsByClassName("mySlides")[2].classList.add("slideInLeft");
		document.getElementsByClassName("mySlides")[3].classList.remove("slideInRight");
		document.getElementsByClassName("mySlides")[3].classList.add("slideInLeft");
	}else{
		document.getElementsByClassName("mySlides")[0].classList.remove("slideInLeft");
		document.getElementsByClassName("mySlides")[0].classList.add("slideInRight");
		document.getElementsByClassName("mySlides")[1].classList.remove("slideInLeft");
		document.getElementsByClassName("mySlides")[1].classList.add("slideInRight");
		document.getElementsByClassName("mySlides")[2].classList.remove("slideInLeft");
		document.getElementsByClassName("mySlides")[2].classList.add("slideInRight");
		document.getElementsByClassName("mySlides")[3].classList.remove("slideInLeft");
		document.getElementsByClassName("mySlides")[3].classList.add("slideInRight");
	}
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Auto slide show
setInterval(plusSlides, slide_delay, slide_right);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if(n > slides.length){
  	slideIndex = 1
  }

  if(n < 1){
  	slideIndex = slides.length
  }
  
  for (i = 0; i < slides.length; i++){
  	slides[i].style.display = "none"; 
  }

  for (i = 0; i < dots.length; i++) {
  	dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


// jQuery scroll animation
$('a').click(function() {
    $('html, body').animate({
        scrollTop: ($($(this).attr('href')).offset().top - 50)
    }, 1000);
    return false;
});

function showMenuMobile(){
	let element = document.getElementsByClassName("menu_mob_container")[0]; 
	if(!element.classList.contains("menu_mobile_show")){
		element.classList.add("menu_mobile_show");
	}else{
		element.classList.remove("menu_mobile_show");
	}
}


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
let toggle = true;
function toggleMenu(event){
	
	let element = document.getElementById("menu_mobile_id");
	let btn = document.getElementById("header_icon");

	if(toggle){
		element.style.animationDirection = 'normal';
		element.classList.add("menu_mobile");
		
		// btn.style.textShadow = '0px 0px 2px black';
		// btn.style.color = '#';
		btn.style.transform = 'rotateZ(90deg)';

	} else{
		element.classList.remove("menu_mobile");
		btn.style.transform = 'rotateZ(0deg)';
		btn.style.textShadow = '';
	}

	toggle = !toggle;
}


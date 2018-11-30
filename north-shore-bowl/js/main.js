let toggle = true;
function toggleMenu(event){
	
	let element = document.getElementById("menu_mobile_id");
	let btn = document.getElementById("header_icon");

	if(toggle){
		element.classList.add("menu_mobile");
		btn.style.transform = 'rotate(0deg)';

	} else{
		element.classList.remove("menu_mobile");
		btn.style.transform = 'rotate(180deg)';
	}

	toggle = !toggle;
}


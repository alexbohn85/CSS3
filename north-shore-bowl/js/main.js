function toggleMenu(event){
	let element = document.getElementById("menu_mobile_id");
	if(element.style.display === 'none'){
		element.style.display = 'block';
		element.classList.add("menu_mobile");
	} else{
		element.style.display = 'none';
	}
}
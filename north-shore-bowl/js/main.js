function toggleMenu(event){
	
	let element = document.getElementById("menu_mobile_id");
	let btn = document.getElementById("header_icon");

	if(element.style.display === 'none'){
		element.style.display = 'block';
		btn.style.textShadow = '0px 0px 1px black';
		btn.style.color = '#458';
		element.classList.add("menu_mobile");
	} else{
		element.style.display = 'none';
		btn.style.color = '#87c';
		btn.style.textShadow = '';

	}
}
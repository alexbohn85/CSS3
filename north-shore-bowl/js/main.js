function toggleMenu(event){
	
	let element = document.getElementById("menu_mobile_id");
	let btn = document.getElementById("header_icon");

	if(!element.classList.contains("menu_mobile")){
		element.style.display = 'block';
		element.classList.add("menu_mobile");
		btn.style.textShadow = '0px 0px 1px black';
		btn.style.color = '#458';	

	} else{
		element.style.display = 'none';
		btn.style.color = '#87c';
		btn.style.textShadow = '';
		element.classList.remove("menu_mobile");
	}
}
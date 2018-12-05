document.getElementsByClassName("icon")[0].onclick = function(){
	document.getElementsByTagName("ul")[0].style.flexDirection = 'column';	
	document.getElementsByTagName("ul")[0].style.height = 'auto';
	document.getElementsByTagName("li")[0].style.display = 'inline';
	document.getElementsByTagName("li")[1].style.display = 'inline';
	document.getElementsByTagName("li")[2].style.display = 'inline';
	document.getElementsByTagName("li")[3].style.display = 'inline';
};
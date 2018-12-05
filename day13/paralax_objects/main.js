window.onscroll = function(){
	var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	// console.log(scrollTop);

	document.getElementsByClassName('topContainer__cat')[0].style.transform = `translateY(-${scrollTop/8}%)`;


	let products = document.getElementsByClassName('products')[0].getBoundingClientRect().top;
	console.log(products);

	if(products < 600){
		document.getElementsByTagName('article')[0].classList.add('showPictures');
	}else{
		document.getElementsByTagName('article')[0].classList.remove('showPictures');
	}
	if(products < 400){		
		document.getElementsByTagName('article')[1].classList.add('showPictures');
	}else{
		document.getElementsByTagName('article')[1].classList.remove('showPictures');
	}
	if(products < 200){
		document.getElementsByTagName('article')[2].classList.add('showPictures');
	}else{
		document.getElementsByTagName('article')[2].classList.remove('showPictures');
	}

}; 
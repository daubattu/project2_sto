$(document).ready(function(){
	$('.slider-modal-index').slick({
        dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1
   	});
	console.log('modal indexxxxxxxxxxxxxx', $('.slider-modal-index'));
});
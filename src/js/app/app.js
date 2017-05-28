import domready from 'domready'

domready(() =>  {

	console.log('Hi there ! I\'m a 4th year french student @HETIC, and currently looking for a 6-month internship in a creative digital agency.');


	// GALLERY PREVIEW-APP

	document.getElementById('preview-app').addEventListener('click', function(e){

		e.preventDefault();

		$.fancybox.open([
			{
				src  : 'assets/img/preview-app_01.jpg',
				opts : {
					caption : 'Preview App - Imac'
				}
			},
			{
				src  : 'assets/img/preview-app_02.jpg',
				opts : {
					caption : 'Preview App - Macbook'
				}
			},
			{
				src  : 'assets/img/preview-app_03.jpg',
				opts : {
					caption : 'Preview App - Iphone'
				}
			},
			{
				src  : 'assets/img/preview-app_04.jpg',
				opts : {
					caption : 'Preview App - Iphone'
				}
			},
			{
				src  : 'assets/img/preview-app_05.jpg',
				opts : {
					caption : 'Preview App - Iphone'
				}
			}
		], {
			loop : true
		});


	});

})

$(document).ready(function() {
	$('#page_holder').pagify({
		pages: ['background', 'about', 'resume', 'projects', 'contact'],
		animation: 'fadeIn',
		animationOut: 'fadeOut',
		'default': 'background',
		cache: false
	});
});
var menuItemNames = ['#background', '#about', '#projects', '#resume'];

$(document).ready(function() {
	$('#page_holder').pagify({
		pages: ['background', 'about', 'resume', 'projects'],
		animation: 'fadeIn',
		animationOut: 'fadeOut',
		'default': 'background',
		cache: true,
		onChange: initialSelect
	});
	$(menuItemNames.join(', ')).click(safeSelect);
});

function safeSelect() {
	var $this = $(this);
	$this.removeClass('unselected').addClass('selected');
	$this.closest('ul').find('a').not(this).removeClass('selected').addClass('unselected');
}

function initialSelect(pageId){
	$('#'+pageId).click();
}
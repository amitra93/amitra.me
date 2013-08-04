var menuItemNames = ['#background', '#about', '#projects', '#resume'];

$(document).ready(function() {
	$('#page_holder').pagify({
		pages: ['background.html', 'about.html', 'resume.html', 'projects.html'],
		animation: 'fadeIn',
		animationOut: 'fadeOut',
		'default': 'background.html',
		cache: true,
		onChange: initialSelect
	});
	$(menuItemNames.join(', ')).click(safeSelect);
});

function safeSelect() {
	var $this = $(this);
	console.log($this);
	$this.removeClass('unselected').addClass('selected');
	$this.closest('ul').find('a').not(this).removeClass('selected').addClass('unselected');
}

function initialSelect(pageId){
	console.log(pageId);
	$('#'+pageId).click();
}
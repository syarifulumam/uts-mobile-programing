$$(document).on('page:init', '.page[data-name="cek-saldo"]', function () {
	
	
	$$("#submit-btn").on('click', function() {
		app.dialog.alert('Ooops... The page is under construction', 'CLASS MOBILE - panpan');
		return;
	
	});
	
	$$('#list-resolved').html(view.html);
	$$(".ngalongware-footer").html('<div class="ngalongware-center">' +
			'<div class="ngalongware-font-9">' + 'CLASS MOBILE - panpan &copy; 2020' + '</div>' +
			'<br />' +
		'</div>');
});

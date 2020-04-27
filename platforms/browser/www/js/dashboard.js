 /* 
	nama : muchamad syariful umam
	nim : 1117090059
	kelas : ti sen 17 rm
  */
$$(document).on('page:init', '.page[data-name="dashboard"]', function () {
	$$("#welcome-title").html("Welcome " + user.firstName + " " + user.lastName);

	$$("#outlet-btn").on('click', function() {
		app.views.main.router.navigate('/user/', {reloadCurrent: true, transition: 'f7-circle'});

	});

	$$("#ewallet-btn").on('click', function() {
		app.views.main.router.navigate('/issue/', {reloadCurrent: true, transition: 'f7-circle'});

	});
	
	$$("#trx-btn").on('click', function() {
		app.views.main.router.navigate('/resolved/', {reloadCurrent: true, transition: 'f7-circle'});

	});

	$$("#approved-btn").on('click', function() {
		app.views.main.router.navigate('/approved/', {reloadCurrent: true, transition: 'f7-circle'});

	});

	$$("#poin-btn").on('click', function() {
		app.views.main.router.navigate('/poin/', {reloadCurrent: true, transition: 'f7-circle'});

	});

	$$("#search-issue-btn").on('click', function() {
		app.views.main.router.navigate('/search-issue/', {reloadCurrent: true, transition: 'f7-circle'});

	});

	$$("#history-btn").on('click', function() {
		app.views.main.router.navigate('/report/', {reloadCurrent: true, transition: 'f7-circle'});

	});

	$$("#transfer-btn").on('click', function() {
		app.views.main.router.navigate('/transfer-antar-rekening/', {reloadCurrent: true, transition: 'f7-circle'});

	});

	$$("#cekSaldo-btn").on('click', function() {
		app.views.main.router.navigate('/cek-saldo/', {reloadCurrent: true, transition: 'f7-circle'});

	});

});

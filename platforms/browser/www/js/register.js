/* 
	nama : muchamad syariful umam
	nim : 1117090059
	kelas : ti sen 17 rm
  */
$$(document).on('page:init', '.page[data-name="register"]', function () {
//var $$ = Dom7;
  // validasi register
	$$("#register-btn").on('click', function() {
		var form = app.form.convertToData('#register-form');
		
		if (form.username == null || form.username.trim() == '') {
			app.dialog.alert('Username is empty', 'CLASS MOBILE - panpan', function() {
			});
			return;
		}
		
		if (form.password == null || form.password.trim() == '') {
			app.dialog.alert('Password is empty', 'CLASS MOBILE - panpan', function() {
			});
			return;
		}

		if (form.firstName == null || form.firstName.trim() == '') {
			app.dialog.alert('First Name is empty', 'CLASS MOBILE - panpan', function() {
			});
			return;
		}

		if (form.lastName == null || form.lastName.trim() == '') {
			app.dialog.alert('Last Name is empty', 'CLASS MOBILE - panpan', function() {
			});
			return;
		}


		if (form.address == null || form.address.trim() == '') {
			app.dialog.alert('Address is empty', 'CLASS MOBILE - panpan', function() {
			});
			return;
		}
		/*
		alert('data to post: ' + JSON.stringify(form));
		app.request.postJSON('hola', form, function(data) {
			app.dialog.alert('posted data: ' + form, 'CLASS MOBILE - panpan');
			return;
		});
		*/
		// dummy
		user.username = form.username;
		user.password = form.password;
		user.firstName = form.firstName; // tidak mau tapil, padahal kalau di impect element > console > user.firstName isinya sesuai inputan
		user.lastName= form.lastName;
		user.idNo = '1234567890';
		user.address = form.address;
		
		app.views.main.router.navigate('/dashboard/', {reloadCurrent: true, transition: 'f7-circle'});
		
	});
	
	// $$("#reg-btn").on('click', function() {
	// 	app.dialog.alert('Ooops... The page is under construction', 'CLASS MOBILE - panpan');
	// 	return;
	
	// });
	
	$$("#forgot-password").on('click', function() {
		app.dialog.alert('Ooops... The page is under construction', 'CLASS MOBILE - panpan');
		return;
	
	});
	
	$$("#logout-btn").on('click', function() {
		app.dialog.alert('Ooops... The page is under construction', 'CLASS MOBILE - panpan');
		return;
	
	});
	
	$$("#language-btn").on('click', function() {
		app.dialog.alert('Ooops... The page is under construction', 'CLASS MOBILE - panpan');
		return;
	
	});
	
	$$("#search-report-btn").on('click', function() {
		app.dialog.alert('Ooops... The page is under construction', 'CLASS MOBILE - panpan');
		return;
	
	});

});

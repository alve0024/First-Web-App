
$(document).ready(function(ev){
var steps = ["#step-one", "#step-two", "#step-three", "#step-four", "#step-five",
						 "#step-six", "#step-seven", "#step-eight", "#step-nine", "#step-ten",
						 "#step-eleven", "#step-twelve"];
	
	$('#intro').on('pageshow', function(ev, data) {
		var currentStep = localStorage['currentStep'];
		console.log(currentStep);
		if (currentStep) {
			$('#btnContinue').removeClass('ui-state-disabled');
			$('#btnContinue').attr('href', currentStep);
			console.log($('#btnContinue').attr('href'));
		}	else {
			$('#btnContinue').addClass('ui-state-disabled');
		}
	});

	$('#clearLocalStorage').on('click', function() {
		localStorage.removeItem('currentStep');
		console.log('localStorage removed!');
	});

	$(steps[0]).on('pageshow', function(ev, data) {
		localStorage['currentStep'] = steps[0];
	});

	$(steps[1]).on('pageshow', function(ev, data) {
		localStorage['currentStep'] = steps[1];
	});

	$(steps[2]).on('pageshow', function(ev, data) {
		localStorage['currentStep'] = steps[2];
	});

	$(steps[3]).on('pageshow', function(ev, data) {
		localStorage['currentStep'] = steps[3];
	});

	$(steps[4]).on('pageshow', function(ev, data) {
		localStorage['currentStep'] = steps[4];
	});

	$(steps[5]).on('pageshow', function(ev, data) {
		localStorage['currentStep'] = steps[5];
	});

	$(steps[6]).on('pageshow', function(ev, data) {
		localStorage['currentStep'] = steps[6];
	});

	$(steps[7]).on('pageshow', function(ev, data) {
		localStorage['currentStep'] = steps[7];
	});

	$(steps[8]).on('pageshow', function(ev, data) {
		localStorage['currentStep'] = steps[8];
	});

	$(steps[9]).on('pageshow', function(ev, data) {
		localStorage['currentStep'] = steps[9];
	});

	$(steps[10]).on('pageshow', function(ev, data) {
		localStorage['currentStep'] = steps[10];
	});

	$(steps[11]).on('pageshow', function(ev, data) {
		localStorage['currentStep'] = steps[11];
	});

});


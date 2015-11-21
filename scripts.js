
$(document).ready(function(ev){

	$('.tutorialstep').on('pageshow', function(ev, data) {
    var step = $(data.toPage).attr('id');
    localStorage['currentStep'] = '#'+step;
	});				 

	$('#intro').on('pageshow', function(ev, data) {
		currentStep = localStorage['currentStep'];

		if (currentStep) {
			$('#btnStart').html('Continue...');
			$('#btnStart').attr('href', currentStep);
		}	else {
			$('#btnStart').html('Start');
			$('#btnStart').attr('href', '#step-one');
		}
	});

	$('#clearLocalStorage').on('click', function() {
		localStorage.removeItem('currentStep');
	});
});


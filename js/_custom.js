$(document).ready(function(){

	// for range min
	$('#output1').html($('#range1').val());
	$('#formControlRangeMin').mousemove(function() {
		$('#output1').html($('#formControlRangeMin').val());
	});

	$('#output').change(function() {
		$('#formControlRangeMin').val($('#output1').html());
	});

	// for range max
	$('#output2').html($('#range2').val());
	$('#formControlRangeMax').mousemove(function() {
		$('#output2').html($('#formControlRangeMax').val());
	});

	$('#output2').change(function() {
		$('#formControlRangeMax').val($('#output2').html());
	});


})
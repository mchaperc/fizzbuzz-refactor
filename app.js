var num;

$(document).ready(function() {
	$(document).on('keypress', function(e) {
		var code = e.keyCode;
		if (code == '13') {
			num = parseInt(Number($('#num').val()));
			aNumber(num);
		}
	});
});

function startGame(num) {
	$('#results').slideUp(750, function() {
		$('#results').empty();
		logicIf();
	});
	$('#results').slideDown(1500);
}

function logicIf() {
	for (var i = 1; i <= num; i++) {
		if (i%5 === 0 && i%3 === 0) {
			$('#results').append('<p>Fizz Buzz</p>');
		} else if (i%3 === 0) {
			$('#results').append('<p>Fizz</p>');
		} else if (i%5 === 0) {
			$('#results').append('<p>Buzz</p>');
		} else {
			$('#results').append('<p>' + i + '</p>');
		}
	}
}

function aNumber(num){
	if (isNaN(num)) {
		$('#results').slideUp(750, function() {
			$('#results').empty();
		})
		addError();
		return false;
	}
	startGame(num);
}

function addError() {
	$('#results').append('<p>Please enter a valid number.</p>');
	$('#results').slideDown(500);
}
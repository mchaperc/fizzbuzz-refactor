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
	$('#results').slideUp(750);
	$('#results').empty().delay(500);
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
	$('#results').slideDown(1500);
}

function aNumber(num){
	if (isNaN(num)) {
		$('#results').empty();
		$('#results').append('<p>Please enter a valid number.</p>');
		return false;
	}
	startGame(num);
}
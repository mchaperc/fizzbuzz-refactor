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
	for (var i = 1; i <= num; i++) {
			if (i%5 === 0 && i%3 === 0) {
				$('body').append('<p>Fizz Buzz</p>');
			} else if (i%3 === 0) {
				$('body').append('<p>Fizz</p>');
			} else if (i%5 === 0) {
				$('body').append('<p>Buzz</p>');
			} else {
				$('body').append('<p>' + i + '</p>');
			}
	}
}

function aNumber(num){
	if (isNaN(num)) {
		$('body').append('<p>Please enter a valid number.</p>');
	}
	startGame(num);
}
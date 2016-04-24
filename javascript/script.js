$(document).ready(function() {
    $('#generateCode').click(function () {
    	if ($('#consent_checkbox').is(':checked') && document.getElementById('emailInput').value && document.getElementById('fullnameInput').value) {
   		    var passcode = generateRandomCode();
   		    $('#passcodeArea').html(passcode);
    	    $('#passcodeSection').css("display", "block");
    	    $('#consent').css("display", "none");
	   	} else {
	   		$('#error').css('display', 'block');
	    }
    });

    function generateRandomCode() {
		var text = ""; 
		var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var numbers = "0123456789";
		var lowerLetters = "abcdefghijklmnopqrstuvwxyz"; 
		var symbols = "%&*";

		var possible = [upperLetters, numbers, lowerLetters, symbols, numbers, upperLetters, lowerLetters];
		for (var i = 0; i < 7; i++) {
			text += possible[i].charAt(Math.floor(Math.random()* possible[i].length));
		}
		return text
	}
});



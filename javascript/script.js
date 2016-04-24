$(document).ready(function() {
    $('#generateCode').click(function () {
    	var emailInput = document.getElementById("emailInput").value;
    	var fullnameInput = document.getElementById("fullnameInput").value;
    	
	    if ($('#consent_checkbox').is(':checked')) {
	    	if (validateEmail(emailInput)) {
	    		if (fullnameInput) {
	    			var passcode = generateRandomCode();
		   		    $('#passcodeArea').html(passcode);
		    	    $('#passcodeSection').css("display", "block");
		    	    $('#consent').css("display", "none");
	    		} else {
	    			$('#fullnameError').css("display", "block");
	    		}
	    	} else {
				$('#emailError').css('display', 'block');
	    	}
	    } else {
	    	$('#checkError').css('display', 'block');
	    	if (validateEmail(emailInput)) {
	    		if (fullnameInput) {
	    			var passcode = generateRandomCode();
		   		    $('#passcodeArea').html(passcode);
		    	    $('#passcodeSection').css("display", "block");
		    	    $('#consent').css("display", "none");
	    		} else {
	    			$('#fullnameError').css("display", "block");
	    		}
	    	} else {
				$('#emailError').css('display', 'block');
	    	}
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
	function validateEmail(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}
});



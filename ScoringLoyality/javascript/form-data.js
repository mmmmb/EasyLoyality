$(document).ready(function() {
    
    $("#button-send").click(function() {
        
            var cardHolderName = $("#card-holder-name").val();
            var cardNumber = $("#card-number").val();
            var cardExpiryMonth = $("#card-expiry-month").val();
            var cardExpiryYear = $("#card-expiry-year option:selected").text();
            var cardCVV = $("#card-cvv").val();
            var cardAmount = $("#card-amount").val();
            var registerToLoyality = $('#register-loyality-check').is(":checked");

            var clientInfo = {
                    cardHolderName: cardHolderName,
                    cardNumber: cardNumber,
                    cardExpiryMonth: cardExpiryMonth,
                    cardExpiryYear: cardExpiryYear,
                    cardCVV: cardCVV,
                    cardAmount: cardAmount,
                    registerToLoyality: registerToLoyality,
            };

            $.ajax({
                    url: "ScoringLoyality/php/make-payment.php",
                    data: clientInfo,
                    method: "POST",
                    dataType: 'json',
                    success: function(data) {
                            if (data['type'] == 'error') {
                                    $(".alert").css('display', 'block');
                                    $("#error-field").html(data['field'] + "*:  ");
                                    $("#error-message").html(data['message']);
                            }
                    }
           
            });
        
    });
    
    $(".form-control").on('keypress', function(event) {
            $(".alert").css('display', 'none');
    });
    
    
});
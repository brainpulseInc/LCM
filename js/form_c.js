   $(document).ready(function(){
    var RecaptchaOptions = { lang : 'en' };
        $('#send_message').click(function(e){
            e.preventDefault();

            var error = false;
           
            var firstname = $('#firstname').val();
            var email = $('#email').val();
            var message = $('#message').val();
            var chainesuccess = "Thank you very much for your message, I will be in contact with you very soon!";
            var chaineerror = 'Sorry, an error occured. please try again.';
            
            if(firstname.length == 0){
                var error = true;
                $('#contact #firstname').addClass("erreurform");
            }else{
                $('#contact #firstname').removeClass("erreurform");
            }
                        
            if(email.length == 0 || email.indexOf('@') == '-1'){
                var error = true;
                $('#contact #email').addClass("erreurform");
            }else{
                $('#contact #email').removeClass("erreurform");
            }

			
            if(message.length == 0){
                var error = true;
                $('#contact #message').addClass("erreurform");
            }
            else{
                $('#contact #message').removeClass("erreurform");
            }
            
            
            if(error == false){
            
                $('#send_message').attr({'disabled' : 'true', 'value' : 'Sending...' });

                $.post("send.php", $('#contact_form').serialize(),function(result){
                console.log("resultat-->"+result);
                    if(result === 'Your message has been sent successfully.'){
                      $('#contact #returnmessage2').text(chainesuccess);
                      $('#send_message').remove();
                      //$("#contact_form")[0].reset();
                      $('#send_message').removeAttr('disabled').attr('value', 'Message sent successfully');
                      
                    }
                    else{
                      $('#contact #returnmessage2').text(chaineerror);
                      $('#send_message').removeAttr('disabled').attr('value', 'Sending fail, please try again');
                      //$('#contact form').fadeOut();
                    }
                });
            }
        });    
    });

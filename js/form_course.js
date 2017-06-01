   $(document).ready(function(){
   
        $('#get_course').click(function(e){
            e.preventDefault();

            var error = false;
           
            var name = $('#name').val();
            var mail = $('#mail').val();
            var chainesuccess = 'Thank you';
            var chaineerror = 'Please try again';
            
            if(name.length == 0){
                var error = true;
                $('#freecourse #name').addClass("erreurform");
            }else{
                $('#freecourse #name').removeClass("erreurform");
            }

            if(mail.length == 0 || mail.indexOf('@') == '-1'){
                var error = true;
                $('#freecourse #mail').addClass("erreurform");
            }else{
                $('#freecourse #mail').removeClass("erreurform");
            }

            
            if(error == false){
            
                $('#get_course').attr({'disabled' : 'true', 'value' : 'Sending...' });

                $.post("free-course.php", $('#freecourse').serialize(),function(result){
                //console.log(result);
                    if(result === 'Thank you, you will receive the free e-mail course soon !'){
                      $('#freecourse #returnmessage').text(chainesuccess);
                      $('#get_course').remove();
                      $('#get_course').removeAttr('disabled').attr('value', 'Thank you');
                      
                    }
                    else{
                      $('#freecourse #returnmessage').text(chaineerror);
                      $('#get_course').removeAttr('disabled').attr('value', 'Please try again');
                      //$('#contact form').fadeOut();
                    }
                });
            }
        });    
    });

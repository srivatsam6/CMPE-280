
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
          console.log($(input).val().trim().match(/^.+@.+\..{2,4}$/));
            if(!($(input).val().trim().match(/^.+@.+\..{2,4}$/))) {
                return false;
            }
        }
        else if($(input).attr('type') == 'username' ){
          //if($(input).val().trim()!="studywise@gmail.com"){
          //  return false;
        //  }
        }
        else if($(input).attr('type') == 'password' ){
        //  if($(input).val().trim()!="123456789"){
          //  return false;
          //}
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);

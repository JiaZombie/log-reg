 $(function () {
    /*toggle login and register*/
    $('#toggle').click(function(){
        $('.icon').toggleClass('reg-icon');
        $('#login').toggleClass('hidden');
        $('#register').toggleClass('reg');
    });
    /* change label when input get or lose focus*/
    var t;
    $('input').focus(function(){
        /* check input*/
        t = setInterval(function(){
            if (checkInput($('#focusedInput1').val(), $('#focusedInput2').val())) {
                $('.went').addClass('go');
            } else {
                $('.went').removeClass('go');
                $('.went').removeClass('log-ok');
                $('.went').html('GO');
            }
        },500);
        $(this).siblings('.control-label').animate({top:'0', opacity:'1'}, 'fast');
    });
    $('input').blur(function(){
        clearInterval(t);
        if (($(this).val().length) == 0) {
            $(this).siblings('.control-label').animate({top:'35px', opacity:'.6'}, 'fast');
        }
    });

    /*click button go*/
    $('#go').click(function(){
        if ($(this).hasClass('go')) {
            $(this).html('&radic;');
            $(this).css({
                background:'#EC3E3E',
                color : '#FFF',
                'font-size' : '1.5em'
            });
        }
    });
});
 /**
  * checkInput Check the form input
  * @param  string name  
  * @param  string pwd   
  * @param  string repwd 
  * @return boolean       
  */
  function checkInput(name, pwd, repwd) {
    // console.log(repwd);
    if (typeof repwd === 'undefined') {
        if (name.length >= 3 && pwd.length >= 3) {
            return true;
        }
        return false;
    } else {
        if (name.length >= 3 && pwd.length >= 3 && repwd == pwd) {
            return true;
        }
        return false;
    }
}
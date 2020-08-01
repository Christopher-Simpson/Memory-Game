$(document).ready(function() {
    $('.card').click(function(){
       $(this).removeClass('card');
       $(this).addClass('change');
    });
    $('.change').click(function() {
        $(this).removeClass('change');
        $(this).addClass('card');
    }); 
});
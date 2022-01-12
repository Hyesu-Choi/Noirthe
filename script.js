$(document).ready(function(){

    $('.trigger').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('nav').toggleClass('active');
    });

})
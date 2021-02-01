$(function(){

    $('#diary').click(function(){
        $('.home').addClass('hide');
        $('.about').addClass('hide');
        $('.impressum').addClass('hide');
        $('.diary').removeClass('hide');
    });

    $('#home').click(function(){
        $('.diary').addClass('hide');
        $('.about').addClass('hide');
        $('.impressum').addClass('hide');
        $('.home').removeClass('hide');
    });

    $('#about').click(function(){
        $('.diary').addClass('hide');
        $('.home').addClass('hide');
        $('.impressum').addClass('hide');
        $('.about').removeClass('hide');
    });

    $('#impressum').click(function(){
        $('.diary').addClass('hide');
        $('.about').addClass('hide');
        $('.home').addClass('hide');
        $('.impressum').removeClass('hide');
    });

});

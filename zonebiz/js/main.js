$(document).ready(function(){
    $('#btn-menu-mobile').click(function(){
        $('.nav-mobile').toggle();
        $('.nav-overlay').toggle();
    })
    $('#exit').click(function(){
        $('.nav-mobile').toggle();
        $('.nav-overlay').toggle();
    })
    $('.nav-overlay').click(function(){
        $('.nav-mobile').toggle();
        $('.nav-overlay').toggle();
    })
})
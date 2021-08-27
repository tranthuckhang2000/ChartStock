$(document).ready(function(){
    let status = 0;
    $('#btn-menu-mobile').click(function(){
        if(status === 0){
            changeStatus('0%');
            status = 1;
        }

    })
    $('#exit').click(function(){      
        changeStatus('100%');
        status = 0;
    })
    $('.nav-overlay').click(function(){
        changeStatus('100%');
        status = 0;
    })

    function changeStatus(value){
        $('.nav-overlay').toggle();
        $('.nav-mobile').css({
        '-webkit-transform' : `translate(${value})`,
            '-webkit-transition': 'transform linear 0.2s',
            
            '-moz-transform' : `translate(${value})`,
            '-moz-transition': 'transform linear 0.2s',

            '-ms-transform' : `translate(${value})`,
            '-ms-transition': 'transform linear 0.2s',

            '-o-transform' : `translate(${value})`,
            'transition': 'transform linear 0.2s',

            '-o-transform' : `translate(${value})`,
            'transition': 'transform linear 0.2s',
        })
    }
})
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

    // Format Name Company
    $('#nameCompany').text('(' + $('#nameCompany').text() + ')');


    function compareChangeColorText(c1){
        let v1 = $('#mo-cua').text();
        let v2 = $(`#${c1}`).text();
        if(v1 > v2){
            $(`#${c1}`).css('color', 'red');

        }
        if(v1 < v2){
            $(`#${c1}`).css('color', 'green');
        }
    }
    compareChangeColorText('tham-chieu');
    compareChangeColorText('cao-nhat');
    compareChangeColorText('thap-nhat');
    compareChangeColorText('cao-nhat-52');
    compareChangeColorText('thap-nhat-52');

    $('#i-chart-technique').click(function(){
        console.log('cliked');
    })

    // note
    $(document).ready(function () {
        $('#i-co-ban').click(function () {
          $('#note-co-ban').toggle();
        })
        $('#i-doanh-nghiep').click(function () {
          $('#note-doanh-nghiep').toggle();
        })
        $('#i-thong-so').click(function () {
          $('#note-thong-so').toggle();
        })
        $('#i-cham-diem').click(function () {
            console.log('clicked');
          $('#note-cham-diem').toggle();
        })
      })

})

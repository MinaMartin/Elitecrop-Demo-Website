$(document).ready(function(){

    $('.slider').height($(window).height()-$('.navbar.navbar-expand-lg').innerHeight()-$('.upper-bar').innerHeight());



    /*Featured Work*/
    $('.Featured .info.text-center .row li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var data_class, classs;
        data_class = $(this).data('class');
        if (data_class === 'all'){
            $('.Featured .row.shuffle>div').css('opacity','1');
        }
        else{
            $('.Featured .row.shuffle .col-md').css('opacity','0.1');

            $('.Featured .row.shuffle .col-md').each(function(index){
                classs =$(this).find('img').attr('class');
                console.log(index); 
                if(classs === data_class )
                {
                    $(this).css('opacity','1');
                }
            })
        }
        
    })
    /*Featured Work*/

    /*start of numbers*/
/*     $(window).scroll(function(){
        var height1 =$(window).scrollTop;
        var height2 =$('.numbers .row .col-3 .numb').offset().top;
        if(height1 === height2)
        {
            $('.numbers .row .col-3 .numb').css('color','yello')
        }
    }) */
    /*end of numbers*/
})
/*pc서브메뉴 허버 메서드*/
$('.pcNav h4:nth-child(5)').hover(function(){
    $('.pcSubmenu').stop().slideDown();
},function(){
    $('.pcSubmenu').stop().slideUp();
});

//사이드메뉴 나오는 코드
$('.list').click(function(){
    $('.sideMenuBox').fadeIn(200);
    $('.sideMenuContent').animate({
        right:0+"%"
    });
    $("body").addClass('notScroll');
});

//사이드메뉴 사라지는 코드
$('.close').click(function(){
    popclose();
});
/*사이드메뉴 사라지는 코드 | 함수 선언*/
function popclose(){
    $('.sideMenuContent').animate({
        right:-100 + '%'
    },300,function(){
        $('.sideMenuBox').fadeOut(200);
    });
    $("body").removeClass('notScroll');
}

//사이드메뉴 바깥영역 클릭시 사이드메뉴사라지는 코드
$(document).click(function (e){
    if($('.sideMenuBox').is(e.target)){
        popclose();
    }
});

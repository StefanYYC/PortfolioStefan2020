setTimeout(function(){
    $(".loader-wrapper").fadeOut("slow");
    $('body').css('overflow-y','visible');
}, 1500);

setTimeout(function(){
    $(".myNavbar").css("display","flex");
    $('.title').css('display','flex');
    $('.visibility-hidden').css("visibility","visible");
},1700);


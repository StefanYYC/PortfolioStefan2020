$(document).ready(function() {
 
    setTimeout(function(){
        $(".loader-wrapper").fadeOut("slow");
        $(".myNavbar").css("visibility","visible");
        $('body').css('overflow-y','visible');
    }, 3000);

    setTimeout(function(){
        $('.title').css("display","inline");
    },3500);
 
});
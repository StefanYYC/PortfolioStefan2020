setTimeout(function () {
  //$(document).scrollTop(0);
  $(".loader-wrapper").fadeOut("slow");
  $("body").css("overflow-y", "visible");
}, 1500);

setTimeout(function () {
  $(".myNavbar").css("display", "flex");
  $(".title").css("display", "flex");
  $(".visibility-hidden").css("visibility", "visible");
}, 1700);

// Gestion de la position active sur la navbar
$(document).on("scroll", function () {
  if ($(document).scrollTop() < 900) {
    $('#home-nav').addClass("active");
    $('#about-nav').removeClass("active");
    $('#competences-nav').removeClass("active");
    $('#projets-nav').removeClass("active")
  } 
  if ($(document).scrollTop() > 900) {
    $('#home-nav').removeClass("active");
    $('#about-nav').addClass("active");
    $('#competences-nav').removeClass("active");
    $('#projets-nav').removeClass("active")
  } 
  if($(document).scrollTop() > 1900){
    $('#home-nav').removeClass("active");
    $('#about-nav').removeClass("active");
    $('#competences-nav').addClass("active");
    $('#projets-nav').removeClass("active")
  }
  if($(document).scrollTop() > 2699){
    $('#home-nav').removeClass("active");
    $('#about-nav').removeClass("active");
    $('#competences-nav').removeClass("active");
    $('#projets-nav').addClass("active")
  }
});

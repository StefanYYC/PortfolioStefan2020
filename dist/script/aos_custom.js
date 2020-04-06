$(function() {
  AOS.init({
    offset: 200, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800 // values from 0 to 3000, with step 50ms
  });
});

$(window).on('load', function() {
  AOS.refresh();
});
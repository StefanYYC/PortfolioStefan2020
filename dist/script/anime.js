var myIcon = anime({
    targets: '.icon',
    translateY: -70,
    delay: anime.stagger(100, {start: 2200}) // delay starts at 500ms then increase by 100ms for each elements.
  });

var myPolymorph = anime({
  targets: '.polymorph',
  points: [
    { value: [
      '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
      '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369']
    },
    { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
    { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
    { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
  ],
  easing: 'easeOutQuad',
  duration: 2000,
  loop: false
});

var directionSkills = anime({
  targets: '.direction-skills',
  translateX: 100,
  delay: anime.stagger(100, {direction: 'reverse'}),
  autoplay: false,
});

var directionBonus = anime({
  targets: '.direction-bonus',
  translateX: 100,
  delay: anime.stagger(200, {direction: 'reverse'}),
  autoplay: false,
});

var cardMiddle = anime({
  targets: '.card-middle',
  translateY: [-80,-40],
  autoplay: false,
});

var flagscroll = true;
var flagscroll2 = true;
$(document).on('scroll', function(){
  //console.log($(document).scrollTop());
  if($(document).scrollTop() > 1700 && flagscroll == true){
    flagscroll = false;
    directionSkills.play();
  }
  if($(document).scrollTop() > 1800 && flagscroll2 == true){
    flagscroll2 = false;
    directionBonus.play();
   // $(document).unbind('scroll');
  }
});

anime({
  targets: '.animation-icons .icon-skills',
  translateX: function(el) {
    return el.getAttribute('data-x');
  },
  translateY: function(el, i) {
    return 50 + (-50 * i);
  },
  scale: function(el, i, l) {
    return (l - i) + .25;
  },
  rotate: function() { return anime.random(-360, 360); },
  borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
  duration: function() { return anime.random(1200, 1800); },
  delay: function() { return anime.random(0, 400); },
  direction: 'alternate',
  loop: true
});
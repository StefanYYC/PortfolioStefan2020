var animation_loading = bodymovin.loadAnimation({
    container: document.getElementById('animation-loader'),
    path: './json/loading.json',
    renderer:'svg',
    autoplay: true,
    loop: true,
    name: 'Icone for loading screen'
})
var animation_0to100 = bodymovin.loadAnimation({
    container: document.getElementById('animation-0to100'),
    path: './json/informations.json',
    renderer:'svg',
    autoplay: true,
    loop: true,
    name: 'Icone dynamique'
})
var animation_books = bodymovin.loadAnimation({
    container: document.getElementById('animation-books'),
    path: './json/books.json',
    renderer:'svg',
    autoplay: false,
    loop: false,
    name: 'Icone dynamique'
})
// Je contrôle la valeur du scroll pour faire apparaître l'anim
// uniquement quand l'user a assez scroll
$(document).on('scroll', function() {
   // console.log($(document).scrollTop());
    if($(document).scrollTop() > 1097 ){
        animation_books.play();
    }
})
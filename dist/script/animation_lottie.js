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

importScripts('https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.js');

anime({
    targets: 'div.bg-blue-800',
    translateY: [
        {value: 200, duration: 1200},
        {value: 0, duration: 800}
    ],

})
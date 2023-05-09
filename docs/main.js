
let el;

el = document.querySelector("#profile-picture");


anime({
    targets: el,
    translateY: [
        {value: 200, duration: 1200},
        {value: 0, duration: 800}
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine'
    }

});

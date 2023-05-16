
let el;
let parentGear = document.querySelector('#base-tooth');
el = document.querySelector("#profile-picture");


anime({
    targets: el,

    rotate: {
        value: '15',

    },
    scale: {
        value: [1, 0.97],
        direction: 'reverse',
        easing: 'linear'
    },




});



//FUNCTION DEFINITION
// Function for converting the matrix of rotation returned from a .getComputerStyle() call


function convertToAngle(matrix) {
    var values = matrix.split('(')[1],
        values = values.split(')')[0],
        values = values.split(',');

    var sin = values[1]; // 0.5

    return Math.round(Math.asin(sin) * (180 / Math.PI));
}

//FUNCTION DEFINITION
//** Target the parent object and  its nth number of pseudo classes */
// Parameters are a tooth number and the parent gear(container)


function rotateTooth(toothNum) {
    // target parentGear by its base-tooth class ID in HTML
    tooth = document.querySelector('.tooth:nth-child(' + toothNum + ')');
    console.log(tooth + " " + toothNum)

    
        style = getComputedStyle(tooth);
        console.log(style.transform);
        deg = convertToAngle(style.transform);
        
        
        console.log(deg)
        console.log(deg + 45);
            anime({
            targets: tooth,
            keyframes: [
                {rotate: [deg, (deg+45)], easing: 'easeInOutSine'},
                
                
            ],
            duration: 2000,
            
            loop: true,
            
            
            complete: function() {
                
                style = getComputedStyle(tooth);
                deg = convertToAngle(style.transform);
                
        
                console.log("Function Complete" + toothNum)
                console.log("Degree before reset is " + deg);
                anime({ targets: tooth,
                rotate: {
                    value:[deg, (deg - 45)],
                    duration: 0,
                    
                }
                
            });
            }
            

        });
        
       
        
    }






function rotateGear () {
    // Range loop starting at 1 since we are searching n:th child nodes and they do not have a zero
for (i = 2; i < 5; ++i) {
    //bounce and rotate profile picture
    anime({
        targets: el,
    
        rotate: {
            value: '15',
    
        },
        scale: {
            value: [1, 0.97],
            direction: 'reverse',
            easing: 'linear'
        },
    });
    
    
    rotateTooth(i);
    tooth4 = document.getElementById("gear4")
    anime({
        targets: tooth4,
            keyframes: [
                {rotate: [-45, 0], easing: 'easeInOutSine'},
                
                
            ],
            duration: 2000,
            loop: true,

            
            
        
        
      });
    console.log("Gear"+i+" is at"+deg)
    
    

}
}







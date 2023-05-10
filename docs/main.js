
let el;
let parentGear = document.querySelector('#base-tooth');
el = document.querySelector("#profile-picture");
var animationComplete = false;

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


function rotateTooth(Toothnum, parentGear) {
    // target parentGear by its base-tooth class ID in HTML
    tooth = document.querySelector('.tooth:nth-child(' + Toothnum + ')');

    // Get all of the computed CSS attributes of the parent
    // Convert the rotation transform matrix into a degree
    style = getComputedStyle(parentGear);
    deg = convertToAngle(style.transform);

    // If the parent gear is not null and the child is not null perform rotation
    // HOWEVER, during this process I discovered that the nth child attribute on css
    // can be added indefinitely on a classes children
    // so we really donn't need this block as the base class will inhereit nth child properties
    // if we make enough calls to the function
    // Nevermind, we need to begin one position back with the original piece to rotate correcy
    if (parentGear != null && tooth == null) {
        console.log("Null child");
        // anime({


        //     targets: parentGear,
        //     rotate: {
        //         value: [deg, (deg+45)],
        //         easing: 'easeInOutSine',
        //     },
        // })
    }
    // The rotation animation stored with the rotation beginning data
    // and the desired end degree
    else {
        style = getComputedStyle(tooth);
        deg = convertToAngle(style.transform);
        console.log(deg)

        var rotate = anime({
            targets: tooth,
            rotate: {
                value: [deg, (deg + 45)],
                easing: 'easeInOutSine',
                direction: 'reverse',
            }
            

        });

        parentGear.oninput = function() {
            rotate.seek(0);
        }
        // Rest the base document selection when exiting the function
        parentGear = document.querySelector('#base-tooth');
    }



}


function rotateGear () {
    // Range loop starting at 1 since we are searching n:th child nodes and they do not have a zero
for (i = 2; i < 6; ++i) {
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
    
   
    
    rotateTooth(i, parentGear);
    console.log("Gear"+i+" is at"+deg)
    animationComplete = true;
    

}
}







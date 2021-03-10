function getHexPoints (center, radius) {
    let x = center[0];
    let y = center[1];
    

    let pointA = 
    
    [x,
    y + radius];
    

    let pointB =
    [x + Math.round(radius * .8660),
    y + radius/2];

    let pointC = 
    [x + Math.round(radius * .8660),
        y + -radius/2];

    let pointD =
    [x,
    y + -radius];


    let pointE =
    [x + -Math.round(radius * .8660),
    y + -radius/2 ];

    let pointF =
    [x + -Math.round(radius * .8660),
    y + radius/2];
    
    let hexagon = [pointA, pointB, pointC, pointD, pointE, pointF];

    let coordinates = hexagon.join(' ')
    
    let stringSyntax = '<polygon points= ' + '"' + coordinates + '" />';

console.log(hexagon);
console.log(coordinates);

return(stringSyntax);

};


console.log("uno");

getHexPoints([150, 38], 29);


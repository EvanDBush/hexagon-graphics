function getHexPoints (center, radius) {
    let x = center[0];
    let y = center[1];
    

    let pointA = 
    
    [x,
    y += radius];
    

    let pointB =
    [x += Math.round(radius * .8660),
    y += radius/2];

    let pointC = 
    [x += Math.round(radius * .8660),
        y += -radius/2];

    let pointD =
    [x,
    y += -radius];


    let pointE =
    [x += -Math.round(-radius * .8660),
    y += -radius/2 ];

    let pointF =
    [x += -Math.round(radius * .8660),
    y += radius/2];
    
    let hexagon = [pointA, pointB, pointC, pointD, pointE, pointF];

console.log(hexagon)
};

getHexPoints([150, 150], 25);
getHexPoints([150, 150], 30);
getHexPoints([150, 150], 35);
getHexPoints([150, 150], 40);
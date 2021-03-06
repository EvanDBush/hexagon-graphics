


function getHexPoints (center, radius) {
    let x = center[0];
    let y = center[1];
    

    let pointA = 
    
    [x += -radius/2,
    y += Math.round(radius * .8660)];
    

    let pointB =
    [x += radius/2,
    y += Math.round(radius * .8660)];

    let pointC = 
    [x += radius, y];

    let pointD =
    [x += radius/2,
    y += Math.round(-radius * .8660)];


    let pointE =
    [x += -radius/2,
    y += Math.round(-radius * .8660)];

    let pointF =
    [x += -radius, y];
    
    let hexagon = [pointA, pointB, pointC, pointD, pointE, pointF];

console.log(hexagon)
};

getHexPoints([150, 150], 25);
getHexPoints([150, 150], 30);
getHexPoints([150, 150], 35);
getHexPoints([150, 150], 40);

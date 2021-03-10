function getPointyCenters (center, radius) {
    let x = center[0];
    let y = center[1];
    

    let pointG = 
    
    [x += -radius/2,
    y += Math.round(radius * .8660)];
    

    let pointH =
    [x += radius/2,
    y += Math.round(radius * .8660)];

    let pointI = 
    [x += radius, y];

    let pointJ =
    [x += radius/2,
    y += Math.round(-radius * .8660)];


    let pointK =
    [x += -radius/2,
    y += Math.round(-radius * .8660)];

    let pointL =
    [x += -radius, y];
    
    let hexagon = [pointG, pointH, pointI, pointJ, pointK, pointL];

console.log(hexagon)
};

getHexPoints([150, 150], 25);
getHexPoints([150, 150], 30);
getHexPoints([150, 150], 35);
getHexPoints([150, 150], 40);
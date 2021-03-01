//
// Hexagon ABCDEF

function getPointA (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += -radius/2;
    y += Math.round(radius * .8660)

    console.log([x, y]);
}

getPointA ([100, 100], 100);

function getPointB (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += radius/2;
    y += Math.round(radius * .8660)

    console.log([x, y]);
}

getPointB ([100, 100], 100);

function getPointC (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += radius; 

    console.log([x, y]);
}

getPointC ([100, 100], 100);

function getPointD (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += radius/2;
    y += Math.round(-radius * .8660)

    console.log([x, y]);
}

getPointD ([100, 100], 100);

function getPointE (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += -radius/2;
    y += Math.round(-radius * .8660)

    console.log([x, y]);
}

getPointE ([100, 100], 100);

function getPointF (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += -radius

    console.log([x, y]);
}

getPointF ([100, 100], 100);

// generate new centers for adjacent hexagons

// Hexagon GHIJKL

function getPointG (center, radius) {
    var x = center[0];
    var y = center[1];
    
    
    y += Math.round(2 * radius * .8660)

    console.log([x, y]);
}

getPointG ([100, 100], 100);

function getPointH (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += 1.5 * radius;
    y += Math.round(radius * .8660)

    console.log([x, y]);
}

getPointH ([100, 100], 100);

function getPointI (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += 1.5 * radius;
    y += -(Math.round(radius * .8660)); 

    console.log([x, y]);
}

getPointI ([100, 100], 100);

function getPointJ (center, radius) {
    var x = center[0];
    var y = center[1];
    
    y += -(Math.round(2 * radius * .8660));

    console.log([x, y]);
}

getPointJ ([100, 100], 100);

function getPointK (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += -1.5 * radius;
    y += -(Math.round(2 * radius * .8660));

    console.log([x, y]);
}

getPointK ([100, 100], 100);

function getPointL (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += -1.5 * radius;
    y += radius * .8660;

    console.log([x, y]);
}

getPointL ([100, 100], 100);


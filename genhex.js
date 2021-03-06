//Testing 123
// Hexagon ABCDEF

const center = [150, 150];
const radius = 50;
const hexagon =[pointA, pointB, pointC, pointD, pointE, pointF];

function getPointA (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += -radius/2;
    y += Math.round(radius * .8660);

    const pointA = (x,y);

    console.log(x,y);
};

function getPointB (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += radius/2;
    y += Math.round(radius * .8660)

    const pointB = (x,y);

    console.log([x, y]);
};


function getPointC (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += radius;
    
    const pointC = (x,y);

    console.log([x, y]);
};

function getPointD (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += radius/2;
    y += Math.round(-radius * .8660);

    const pointD = (x,y);

    console.log([x, y]);
};



function getPointE (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += -radius/2;
    y += Math.round(-radius * .8660);

    const pointE = (x,y);

    console.log([x, y]);
};

function getPointF (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += -radius;

    const pointF = (x,y);

    console.log([x, y]);
};

console.log(hexagon);



// generate new centers for adjacent hexagons

// Hexagon GHIJKL

function getPointG (center, radius) {
    var x = center[0];
    var y = center[1];
    
    
    y += Math.round(2 * radius * .8660)

    console.log([x, y]);
};

function getPointH (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += 1.5 * radius;
    y += Math.round(radius * .8660)

    console.log([x, y]);
};

function getPointI (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += 1.5 * radius;
    y += -(Math.round(radius * .8660)); 

    console.log([x, y]);
};

function getPointJ (center, radius) {
    var x = center[0];
    var y = center[1];
    
    y += -(Math.round(2 * radius * .8660));

    console.log([x, y]);
};

function getPointK (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += -1.5 * radius;
    y += -(Math.round(2 * radius * .8660));

    console.log([x, y]);
};

function getPointL (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += -1.5 * radius;
    y += Math.round(radius * .8660);

    console.log([x, y]);
};



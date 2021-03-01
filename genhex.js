
function getPointA (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += -radius/2;
    y += Math.round(radius * .8660)

    console.log([x, y]);
}

getPointA ([100, 100], 95);

function getPointB (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += radius/2;
    y += Math.round(radius * .8660)

    console.log([x, y]);
}

getPointB ([100, 100], 95);

function getPointC (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += radius; 

    console.log([x, y]);
}

getPointC ([100, 100], 95);

function getPointD (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += radius/2;
    y += Math.round(-radius * .8660)

    console.log([x, y]);
}

getPointD ([100, 100], 95);

function getPointE (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += -radius/2;
    y += Math.round(-radius * .8660)

    console.log([x, y]);
}

getPointE ([100, 100], 95);

function getPointF (center, radius) {
    var x = center[0];
    var y = center[1];
    
    x += -radius

    console.log([x, y]);
}

getPointF ([100, 100], 95);


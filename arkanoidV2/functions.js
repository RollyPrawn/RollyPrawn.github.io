// Distance between two points
function distance(pos1, pos2) {

    output = Math.sqrt( (pos1['x'] - pos2['x'])**2 + (pos1['y'] - pos2['y'])**2)
    
    return output;

}

// Elastic collision velocities
function elasticLinearCollisionV1(m1, m2, u1, u2) {

    v1 = ((m1 - m2) / (m1 + m2)) * u1 + (2*m2 / (m1 + m2)) * u2

    return v1;

}

function elasticLinearCollisionV2(m1, m2, u1, u2) {

    v2 = (2*m1 / (m1 + m2)) * u1 + ((m2 - m1) / (m1 + m2)) * u2

    return v2;

}

// Scalar product between two velocities
function innerProduct(vel1, vel2) {

    output = vel1['x'] * vel2['x'] + vel1['y'] * vel2['y']
    
    return output;

}

// Determining a random spawn location on the grid.
function randomSpawnLocation(width, height, tileSize) {

    let xPos;
    let yPos;
    
    // Breaking the entire canvas into a grid of tiles.
    let rows = width / tileSize;
    let cols = height / tileSize;

    xPos = Math.floor(Math.random() * rows) * tileSize;
    yPos = Math.floor(Math.random() * 0.5*cols) * tileSize;

    return { x: xPos, y: yPos };

}

// Determining spawn location on the grid.
function spawnLocation(xPos, yPos) {
    
    return { x: xPos, y: yPos };

}



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

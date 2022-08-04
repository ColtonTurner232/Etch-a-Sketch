const gridCon = document.querySelector('.grid-container');

makeGrid(16, 16);



//Creates a 16x16 grid
function makeGrid(rows, columns) {
    gridCon.style.setProperty('--grid-rows', rows);
    gridCon.style.setProperty('--grid-columns', columns);
    //Loops through and creates a new div grids
    for (i = 0; i < (rows * columns); i++) {
        let cell = document.createElement("div");
        gridCon.appendChild(cell).className = "grid-item";
    };
};

//Changes the color of a single grid when hovered over
gridCon.addEventListener('mouseover', function(e) {
    //Looks for class and adds selected
    if (e.target.matches('.grid-item')) {
        e.target.classList.add('selected');
    }
});
        
    

    
    



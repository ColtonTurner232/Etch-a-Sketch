const container = document.querySelector('.container');
const gridCon = document.querySelector('.grid-container');
const h1 = document.querySelector('.h1');
const btn = document.querySelector('.button')

makeGrid(16, 16);
newSketch();


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

 
function newSketch() {
    btn.addEventListener('click', e => {
        btn.remove();
        h1.remove();
        
        const sketchSize = document.createElement('h2');
        sketchSize.classList.add('sketchSize');
        sketchSize.textContent = 'Choose New Sketch Size';
        container.append(sketchSize);

        const input = document.createElement('input');
        input.classList.add('input');
        Object.assign(input, {class: 'input', type: 'number', min: '1', max: '100'});
        container.append(input);

    });
}

    
    



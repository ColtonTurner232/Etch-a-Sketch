const container = document.querySelector('.container');
const gridCon = document.querySelector('.grid-container');
const h1 = document.querySelector('.h1');
const btn = document.querySelector('.button');

makeGrid(16, 16);
newSketch();

//Changes the color of a single grid when hovered over
gridCon.addEventListener('mouseover', function(e) {
    //Looks for class and adds selected
    if (e.target.matches('.grid-item')) {
        e.target.classList.add('selected');
    }
});

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

function newGrid(rows, columns) {
    let script = document.querySelector("script");
    let newGridCon = document.createElement('div');

    newGridCon.classList.add('gird-container');
    newGridCon.setAttribute('id', 'grid-container');
    document.body.insertBefore(newGridCon, script);

    newGridCon.style.setProperty('--grid-rows', rows);
    newGridCon.style.setProperty('--grid-columns', columns);
    //Loops through and creates a new div grids
    for (i = 0; i < (rows * columns); i++) {
        let cell = document.createElement("div");
        newGridCon.appendChild(cell).className = "grid-item";
    };

    newGridCon.addEventListener('mouseover', function(e) {
        //Looks for class and adds selected
        if (e.target.matches('.grid-item')) {
            e.target.classList.add('selected');
        }
    });
};

//Function that asks for new grid size and creates it
function newSketch() {
    btn.addEventListener('click', e => {
        
        btn.remove();
        h1.remove();
        gridCon.remove();

        const sketchSize = document.createElement('h2');
        sketchSize.classList.add('sketchSize');
        sketchSize.textContent = 'Choose New Sketch Size';
        container.append(sketchSize);

        const parameters = document.createElement('h3');
        parameters.classList.add('parameters');
        parameters.textContent = 'Maximum number size is 100';
        container.append(parameters); 

        //Creates number input
        const input = document.createElement('input');
        input.classList.add('input');
        Object.assign(input, {id: 'number', type: 'number', min: '1', max: '100'});
        container.append(input);

        //Takes user number and creates new grid
        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                let userNum = document.getElementById('number').value;
                if (userNum > 100 || userNum < 1) {
                    return false;
                }
                else {
                    input.remove();
                    sketchSize.remove();
                    parameters.remove();
                    newGrid(userNum, userNum)
                }
            }
        })
    });
}



createGrid(16);

const resetButton = document.querySelector('#resetButton');
const resizebutton = document.querySelector('#resizeButton');

resetButton.addEventListener('click', resetGrid);
resizebutton.addEventListener('click', resizeGrid);

function resetGrid(){
    const divCarre = document.querySelectorAll('#case');
    for(let i = 0; i < divCarre.length; i++){
        divCarre[i].style.backgroundColor = "white";
    };
};

function resizeGrid() {
    let size = prompt("Entrez un nombre compris entre 3 et 100");
    if(isNaN(size)){
        alert("Erreur. Veuillez entrer un nombre valide");
    } else {
        if( size < 3 || size > 100){
            alert("Erreur. Veuillez entrer un nombre valide");
        } else { 
            eraseGrid();
            console.log(size);
            createGrid(size); 

        };
    };
};

function createGrid (size){
    const mainDiv = document.querySelector('#drawingZone');
    let mainDivWidth = parseFloat(window.getComputedStyle(mainDiv).width);
    let caseSize = (mainDivWidth / size)  + "px";

    for(let i = 0; i < size; i++){
        const newRow = document.createElement('div');
        newRow.id = "row-case"
        newRow.style.width = mainDivWidth + "px";
        newRow.style.height = caseSize;
        //newRow.style.border = "solid 1px";
        newRow.style.display = "flex";
        mainDiv.appendChild(newRow);
        for(let j = 0; j < size ; j++){
            const newcolumn = document.createElement('div');
            newcolumn.id = "case";
            newcolumn.style.border = "solid rgba(0, 0, 0, 1)";
            newcolumn.style.backgroundColor = "#08088C";
            newcolumn.style.opacity = "0.1";
            newcolumn.style.width = caseSize;
            newcolumn.style.height = caseSize;
            newRow.appendChild(newcolumn);
        }
    }
    drawInGrid();
}

function eraseGrid(){
    const divRow = document.querySelectorAll('#row-case');
    for (let i = 0; i < divRow.length; i ++){
        divRow[i].remove();
    }
}

function drawInGrid() {
    const divCarre = document.querySelectorAll('#case');
    for(let k = 0; k < divCarre.length; k++){
        
        divCarre[k].addEventListener("mouseover", () => {
            let squarreColor = parseFloat(window.getComputedStyle(divCarre[k]).opacity);
            squarreColor += 0.3;
            divCarre[k].style.opacity = squarreColor + 0,1;
            console.log(squarreColor);
        });
    }
}
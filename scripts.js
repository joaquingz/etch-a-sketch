const container = document.querySelector('#container');
const containerSize = container.clientHeight;

function createGrid(number){
    const gridSize = containerSize/number;

    for(let i=0; i <= number-1; i++){
        for(let j=0; j <=number-1; j++){
            const div = document.createElement('div');
            div.classList.add('grid-item');
            div.style.width = +gridSize+'px';
            div.style.height = +gridSize+'px';
            container.appendChild(div);
        }
    }
}

createGrid(32);

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((item) => {
    addEventListener('mouseover', (e)=>{
        if(e.target.className === 'grid-item'){
            e.target.style.background = 'black';
        }
    })
})
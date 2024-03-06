const container = document.querySelector('#container');
const containerSize = container.clientHeight;
const changeGridButton = document.querySelector('.button1');

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
    //Selects all the 'pixels' inside the container
    const gridItems = document.querySelectorAll('.grid-item');
    //Event listener to paint the grid
    gridItems.forEach((item) => {
        item.addEventListener('mouseover', (e)=>{
            e.target.style.background = 'black';
        })
    })
}

createGrid(16);

changeGridButton.addEventListener('click', (e) =>{
    let choice = Number(prompt('Choose grid size (No more than 100)'))
    console.log((choice));

    if(choice > 100){
        alert('Number is too high!')
    }else if(choice === 0){
        container.innerHTML = '';
        createGrid(16);
    }else{
        container.innerHTML = '';
        createGrid(choice)
    }
})

document.addEventListener('DOMContentLoaded', () => {
    let board = document.getElementById('board');
    let squareSize ;    //size in pixel
    let width = 8;
    let height = 8;
    let squares = [];

    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var maxSize = Math.min(windowWidth, windowHeight) - 20;
    squareSize = Math.floor((maxSize-8) / 8);

    board.style.width = maxSize + "px";
    board.style.height = maxSize + "px";
    for(let i = 0; i < width*height; i++) {
        let square = document.createElement('div');
        square.setAttribute('id', i);
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
        /*if ((Math.floor(i/width))%2 == 0) {
            if (i%2 == 0)
                square.setAttribute('class', 'black')
        }
        else {
            if (i%2 != 0)
                square.setAttribute('class', 'black')
        }*/
        board.appendChild(square)
        squares.push(square);     
    }

});
let currentlySelected = null;

function initializeChessboard() {
    const board = document.createElement('div');
    board.className = 'chessboard';

    for (let row = 1; row <= 8; row++) {
        for (let col = 1; col <= 8; col++) {
            const square = document.createElement('div');
            square.className = 'square';
            square.id = `square-${row}-${col}`;

            square.classList.add((row + col) % 2 === 0 ? 'light' : 'dark');

            square.addEventListener('click', function() {
                if (currentlySelected) {
                    const prevId = currentlySelected.id;
                    const [ , r, c ] = prevId.split('-').map(Number);
                    currentlySelected.className = 'square ' + ((r + c) % 2 === 0 ? 'light' : 'dark');
                }

                this.className = 'square selected';
                currentlySelected = this;
            });

            board.appendChild(square);
        }
    }

    document.body.appendChild(board);
}
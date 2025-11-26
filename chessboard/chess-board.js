let currentlySelected = null;

function initializeChessboard() {
    const board = document.createElement('div');
    board.className = 'chessboard';

    const existingBoard = document.querySelector('.chessboard');
    if (existingBoard) {
        existingBoard.remove();
    }

    for (let row = 1; row <= 8; row++) {
        for (let col = 1; col <= 8; col++) {
            const square = document.createElement('div');
            square.className = 'square';
            square.id = `square-${row}-${col}`;

            if ((row + col) % 2 === 0) {
                square.classList.add('light'); // white
            } else {
                square.classList.add('dark'); // black
            }
            square.addEventListener('click', function() {
                if (currentlySelected && currentlySelected !== this) {
                    const prevId = currentlySelected.id;
                    const [_, prevRow, prevCol] = prevId.split('-').map(Number);
                    currentlySelected.className = 'square ' +
                        ((prevRow + prevCol) % 2 === 0 ? 'light' : 'dark');
                }

                if (currentlySelected === this && this.classList.contains('selected')) {
                    this.className = 'square ' +
                        ((row + col) % 2 === 0 ? 'light' : 'dark');
                    currentlySelected = null;
                } else {
                    this.className = 'square selected';
                    currentlySelected = this;
                }
            });

            board.appendChild(square);
        }
    }

    document.body.appendChild(board);
}
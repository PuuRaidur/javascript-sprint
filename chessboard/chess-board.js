let currentlySelected = null;

function initializeChessboard() {
    const board = document.createElement('div');
    board.className = 'chessboard';

    for (let row = 1; row <= 8; row++) {
        for (let col = 1; col <= 8; col++) {
            const square = document.createElement('div');
            square.className = 'square';
            square.id = `square-${row}-${col}`;

            if ((row + col) % 2 === 0) {
                square.classList.add('light');
            } else {
                square.classList.add('dark');
            }
            square.addEventListener('click', () => {
                // Revert previously selected square
                if (currentlySelected) {
                    currentlySelected.classList.remove('selected');
                    // Restore original color
                    const [r, c] = currentlySelected.id.split('-').slice(1).map(Number);
                    currentlySelected.classList.add((r + c) % 2 === 0 ? 'light' : 'dark');
                }

                square.classList.remove('light', 'dark');
                square.classList.add('selected');
                currentlySelected = square;
            });

            board.appendChild(square);
        }
    }

    document.body.appendChild(board);
}
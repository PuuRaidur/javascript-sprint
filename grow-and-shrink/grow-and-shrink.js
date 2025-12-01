document.addEventListener('DOMContentLoaded', () => {
    const letterContainer = document.createElement('div');
    letterContainer.className = 'letter-container';

    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(65 + i);
        const letterDiv = document.createElement('div');
        letterDiv.className = 'letter';
        letterDiv.id = letter.toLowerCase();
        letterDiv.textContent = letter;
        letterDiv.style.fontSize = '14px'; // This is fine
        letterContainer.appendChild(letterDiv);
    }

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    const buttons = [
        { id: 'prev', text: '<' },
        { id: 'next', text: '>' },
        { id: 'decrease', text: '-' },
        { id: 'increase', text: '+' }
    ];

    buttons.forEach(btn => {
        const button = document.createElement('button');
        button.id = btn.id;
        button.textContent = btn.text;
        buttonContainer.appendChild(button);
    });

    document.body.appendChild(letterContainer);
    document.body.appendChild(buttonContainer);

    let currentIndex = 0;
    const letters = document.querySelectorAll('.letter');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const decreaseBtn = document.getElementById('decrease');
    const increaseBtn = document.getElementById('increase');

    function updateSelectedLetter() {
        letters.forEach(letter => {
            letter.classList.remove('selected');
            letter.style.fontWeight = 'normal';
        });

        letters[currentIndex].classList.add('selected');
        letters[currentIndex].style.fontWeight = 'bold';
    }

    function getCurrentSize() {
        return parseInt(letters[currentIndex].style.fontSize) || 14;
    }

    function selectNext() {
        currentIndex = (currentIndex + 1) % 26;
        updateSelectedLetter();
    }

    function selectPrev() {
        currentIndex = (currentIndex - 1 + 26) % 26;
        updateSelectedLetter();
    }

    function decreaseSize() {
        const currentSize = parseInt(letters[currentIndex].style.fontSize) || 14;
        if (currentSize > 10) {
            letters[currentIndex].style.fontSize = (currentSize - 2) + 'px';
        }
    }

    function increaseSize() {
        const currentSize = parseInt(letters[currentIndex].style.fontSize) || 14;
        if (currentSize < 26) {
            letters[currentIndex].style.fontSize = (currentSize + 2) + 'px';
        }
    }

    prevBtn.addEventListener('click', selectPrev);
    nextBtn.addEventListener('click', selectNext);
    decreaseBtn.addEventListener('click', decreaseSize);
    increaseBtn.addEventListener('click', increaseSize);

    letters.forEach((letter, index) => {
        letter.addEventListener('click', () => {
            currentIndex = index;
            updateSelectedLetter();
        });
    });

    updateSelectedLetter();
});
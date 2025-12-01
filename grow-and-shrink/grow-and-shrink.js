document.addEventListener('DOMContentLoaded', () => {
    const letterContainer = document.createElement('div');
    letterContainer.className = 'letter-container';

    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(65 + i);
        const letterDiv = document.createElement('div');
        letterDiv.className = 'letter';
        letterDiv.id = letter.toLowerCase();
        letterDiv.textContent = letter;
        letterDiv.style.fontSize = '14px'; // Default font size
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
        const fontSize = letters[currentIndex].style.fontSize;
        return Math.round(parseFloat(fontSize)) || 14;
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
        let currentSize = getCurrentSize();
        if (currentSize > 10) {
            currentSize = Math.max(10, currentSize - 2);
            letters[currentIndex].style.fontSize = currentSize + 'px';
        }
    }

    function increaseSize() {
        let currentSize = getCurrentSize();
        if (currentSize < 26) {
            currentSize = Math.min(26, currentSize + 2);
            letters[currentIndex].style.fontSize = currentSize + 'px';
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
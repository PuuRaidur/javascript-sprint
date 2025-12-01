const outside = document.querySelector('.outside');
const inside = document.querySelector('.inside');

let activeCharacter = null;

document.addEventListener('keydown', (e) => {
    if (e.key.match(/^[a-z]$/)) {
        if (activeCharacter) {
            activeCharacter.classList.remove('follow');
        }
        const charDiv = document.createElement('div');
        charDiv.textContent = e.key;
        charDiv.classList.add('character', 'follow');
        document.body.appendChild(charDiv);
        activeCharacter = charDiv;
    } else if (e.key === 'Escape') {
        const characters = document.querySelectorAll('.character');
        characters.forEach(char => char.remove());
        activeCharacter = null;
    }
});

document.addEventListener('mousemove', (e) => {
    if (activeCharacter) {
        activeCharacter.style.left = `${e.clientX - activeCharacter.offsetWidth / 2}px`;
        activeCharacter.style.top = `${e.clientY - activeCharacter.offsetHeight / 2}px`;

        const jailRect = inside.getBoundingClientRect();
        const inJail = e.clientX >= jailRect.left && e.clientX <= jailRect.right &&
                     e.clientY >= jailRect.top && e.clientY <= jailRect.bottom;

        if (inJail) {
            activeCharacter.classList.add('trapped');
        } else {
            if (activeCharacter.classList.contains('trapped')) {
                activeCharacter.classList.remove('follow');

                let finalX = e.clientX;
                let finalY = e.clientY;

                finalX = Math.max(jailRect.left, Math.min(finalX, jailRect.right));
                finalY = Math.max(jailRect.top, Math.min(finalY, jailRect.bottom));

                activeCharacter.style.left = `${finalX - activeCharacter.offsetWidth / 2}px`;
                activeCharacter.style.top = `${finalY - activeCharacter.offsetHeight / 2}px`;

                activeCharacter = null;
            }
        }
    }
});
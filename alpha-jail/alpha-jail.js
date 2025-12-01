const outside = document.createElement('div');
outside.classList.add('zone', 'outside');
document.body.appendChild(outside);

const inside = document.createElement('div');
inside.classList.add('zone', 'inside');
document.body.appendChild(inside);

let activeCharacter = null;
let lastMousePos = { x: 0, y: 0 };
const CHARACTER_SIZE = 40;

document.addEventListener('mousemove', (e) => {
    lastMousePos = { x: e.clientX, y: e.clientY };

    if (activeCharacter && activeCharacter.classList.contains('follow')) {
        activeCharacter.style.left = `${lastMousePos.x - CHARACTER_SIZE / 2}px`;
        activeCharacter.style.top = `${lastMousePos.y - CHARACTER_SIZE / 2}px`;

        const jailRect = inside.getBoundingClientRect();
        const isInsideJail = lastMousePos.x >= jailRect.left;

        if (isInsideJail) {
            activeCharacter.classList.add('trapped');
        } else if (activeCharacter.classList.contains('trapped')) {
            activeCharacter.classList.remove('follow');
            activeCharacter.style.left = `${jailRect.left - CHARACTER_SIZE / 2}px`;
        }
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.character').forEach(char => char.remove());
        activeCharacter = null;
        return;
    }

    if (!/^[a-z]$/.test(e.key)) {
        return;
    }

    if (activeCharacter) {
        activeCharacter.classList.remove('follow');
    }

    const charDiv = document.createElement('div');
    charDiv.textContent = e.key;
    charDiv.classList.add('character', 'follow');
    
    charDiv.style.left = `${lastMousePos.x - CHARACTER_SIZE / 2}px`;
    charDiv.style.top = `${lastMousePos.y - CHARACTER_SIZE / 2}px`;

    document.body.appendChild(charDiv);
    activeCharacter = charDiv;

    const jailRect = inside.getBoundingClientRect();
    if (lastMousePos.x >= jailRect.left) {
        activeCharacter.classList.add('trapped');
    }
});

const outside = document.createElement('div');
outside.classList.add('zone', 'outside');
document.body.appendChild(outside);

const inside = document.createElement('div');
inside.classList.add('zone', 'inside');
document.body.appendChild(inside);

let activeCharacter = null;
let lastMousePos = { x: 0, y: 0 };
const CHARACTER_SIZE = 40;

function updateDomPosition(element, x, y) {
    element.style.left = `${x - CHARACTER_SIZE / 2}px`;
    element.style.top = `${y - CHARACTER_SIZE / 2}px`;
}

document.addEventListener('mousemove', (e) => {
    lastMousePos = { x: e.clientX, y: e.clientY };

    if (!activeCharacter || !activeCharacter.isFollowing) {
        return;
    }

    updateDomPosition(activeCharacter.element, lastMousePos.x, lastMousePos.y);

    const jailRect = inside.getBoundingClientRect();
    const isInsideJail = lastMousePos.x >= jailRect.left;

    if (isInsideJail) {
        if (!activeCharacter.isTrapped) {
            activeCharacter.isTrapped = true;
            activeCharacter.element.classList.add('trapped');
        }
    } else {
        if (activeCharacter.isTrapped) {
            activeCharacter.isFollowing = false;
            activeCharacter.element.classList.remove('follow');
            updateDomPosition(activeCharacter.element, jailRect.left, lastMousePos.y);
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
        activeCharacter.isFollowing = false;
        if (activeCharacter.element) {
            activeCharacter.element.classList.remove('follow');
        }
    }

    const charDiv = document.createElement('div');
    charDiv.textContent = e.key;
    charDiv.classList.add('character', 'follow');

    updateDomPosition(charDiv, lastMousePos.x, lastMousePos.y);
    document.body.appendChild(charDiv);

    const jailRect = inside.getBoundingClientRect();
    const isBornInJail = lastMousePos.x >= jailRect.left;

    if (isBornInJail) {
        charDiv.classList.add('trapped');
    }

    activeCharacter = {
        element: charDiv,
        isFollowing: true,
        isTrapped: isBornInJail,
    };
});

const outside = document.createElement('div');
outside.classList.add('zone', 'outside');
document.body.appendChild(outside);

const inside = document.createElement('div');
inside.classList.add('zone', 'inside');
document.body.appendChild(inside);

let activeCharacter = null;
let lastMousePos = { x: 0, y: 0 };

function updateDomPosition(element, x, y) {
    element.style.left = `${x - 20}px`;
    element.style.top = `${y - 20}px`;
}

document.addEventListener('mousemove', (e) => {
    lastMousePos = { x: e.clientX, y: e.clientY };
    if (!activeCharacter || !activeCharacter.isFollowing) return;

    const jailRect = inside.getBoundingClientRect();
    const isInsideJail = lastMousePos.x >= jailRect.left;

    if (activeCharacter.isTrapped) {
        if (isInsideJail) {
            updateDomPosition(activeCharacter.element, lastMousePos.x, lastMousePos.y);
        }
        return;
    }

    updateDomPosition(activeCharacter.element, lastMousePos.x, lastMousePos.y);

    if (isInsideJail) {
        activeCharacter.isTrapped = true;
        activeCharacter.element.classList.add('trapped');
    } else {
        activeCharacter.isFollowing = false;
        activeCharacter.element.classList.remove('follow');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.character').forEach(c => c.remove());
        activeCharacter = null;
        return;
    }

    if (!/^[a-z]$/.test(e.key)) return;

    if (activeCharacter) {
        activeCharacter.isFollowing = false;
        activeCharacter.element.classList.remove('follow');

        const charRect = activeCharacter.element.getBoundingClientRect();
        const jailRect = inside.getBoundingClientRect();
        // snap to edge if inside jail
        if (charRect.right > jailRect.left) {
            activeCharacter.element.style.left = `${jailRect.left - 40}px`;
        }
    }

    const charDiv = document.createElement('div');
    charDiv.classList.add('character', 'follow');
    charDiv.textContent = e.key;
    updateDomPosition(charDiv, lastMousePos.x, lastMousePos.y);
    document.body.appendChild(charDiv);

    activeCharacter = {
        element: charDiv,
        isFollowing: true,
        isTrapped: false // start as not trapped
    };
});

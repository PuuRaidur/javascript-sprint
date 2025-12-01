// Create the zones dynamically
const outside = document.createElement('div');
outside.classList.add('zone', 'outside');
document.body.appendChild(outside);

const inside = document.createElement('div');
inside.classList.add('zone', 'inside');
document.body.appendChild(inside);

let activeCharacter = null;
let lastMouseX = 0;
let lastMouseY = 0;

document.addEventListener('mousemove', (e) => {
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;

    if (activeCharacter && activeCharacter.classList.contains('follow')) {
        // Rely on CSS transform for centering
        activeCharacter.style.left = `${lastMouseX}px`;
        activeCharacter.style.top = `${lastMouseY}px`;
    }

    const jailRect = inside.getBoundingClientRect();
    const inJail = lastMouseX >= jailRect.left && lastMouseX <= jailRect.right &&
                     lastMouseY >= jailRect.top && lastMouseY <= jailRect.bottom;

    if (activeCharacter) {
        if (inJail) {
            activeCharacter.classList.add('trapped');
        } else {
            // If it was trapped and now outside, detach it.
            if (activeCharacter.classList.contains('trapped')) {
                activeCharacter.classList.remove('follow');
                // Position character at the edge of the jail. For simplicity, place it at the left edge for now.
                activeCharacter.style.left = `${jailRect.left}px`;
                // DO NOT set activeCharacter to null here. It should remain referenced
                // so a new key press can replace it, or for other logic.
            }
        }
    }
});

document.addEventListener('keydown', (e) => {
    // Ignore anything other than a-z
    if (e.key.length !== 1 || e.key < 'a' || e.key > 'z') {
        if (e.key === 'Escape') {
            const characters = document.querySelectorAll('.character');
            characters.forEach(char => char.remove());
            activeCharacter = null;
        }
        return;
    }

    if (activeCharacter) {
        activeCharacter.classList.remove('follow');
    }

    const charDiv = document.createElement('div');
    charDiv.textContent = e.key;
    charDiv.classList.add('character', 'follow');
    
    // Initial position at current mouse position
    charDiv.style.left = `${lastMouseX}px`;
    charDiv.style.top = `${lastMouseY}px`;

    document.body.appendChild(charDiv);
    activeCharacter = charDiv;
});
const outside = document.createElement('div');
outside.classList.add('zone', 'outside');

const inside = document.createElement('div');
inside.classList.add('zone', 'inside');

document.body.appendChild(outside);
document.body.appendChild(inside);

let mouseX = 0, mouseY = 0;
let currentChar = null;
let inJail = false;
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!currentChar || !currentChar.classList.contains('follow')) return;

    const jailRect = inside.getBoundingClientRect();
    const rect = currentChar.getBoundingClientRect();
    const halfWidth = rect.width / 2;
    const halfHeight = rect.height / 2;

    const minX = jailRect.left + halfWidth;
    const maxX = jailRect.right - halfWidth;
    const minY = jailRect.top + halfHeight;
    const maxY = jailRect.bottom - halfHeight;

    const pointerInJail =
        mouseX >= minX &&
        mouseX <= maxX &&
        mouseY >= minY &&
        mouseY <= maxY;

    if (pointerInJail) {
        currentChar.classList.add('trapped');
        currentChar.style.left = `${mouseX}px`;
        currentChar.style.top = `${mouseY}px`;
        inJail = true;
    } else {
        if (inJail) {
            document.querySelectorAll('.character.follow.trapped').forEach(char => {
                char.classList.remove('follow');
            });

            const clampedX = Math.min(Math.max(mouseX, minX), maxX);
            const clampedY = Math.min(Math.max(mouseY, minY), maxY);

            currentChar.style.left = `${clampedX}px`;
            currentChar.style.top = `${clampedY}px`;

            currentChar = null;
        } else {
            currentChar.style.left = `${mouseX}px`;
            currentChar.style.top = `${mouseY}px`;
        }
        inJail = false;
    }
});
document.addEventListener('keydown', (e) => {
    const key = e.key;

    if (key === 'Escape') {
        document.querySelectorAll('.character').forEach(el => el.remove());
        currentChar = null;
        return;
    }

    if (key.length === 1 && key.match(/^[a-z]$/)) {
        if (currentChar) {
            currentChar.classList.remove('follow');
        }

        const charDiv = document.createElement('div');
        charDiv.classList.add('character', 'follow');
        charDiv.textContent = key;
        charDiv.style.left = `${mouseX}px`;
        charDiv.style.top = `${mouseY}px`;

        document.body.appendChild(charDiv);
        currentChar = charDiv;

        const jailRect = inside.getBoundingClientRect();
        const rect = charDiv.getBoundingClientRect();
        const halfWidth = rect.width / 2;
        const halfHeight = rect.height / 2;
        const minX = jailRect.left + halfWidth;
        const maxX = jailRect.right - halfWidth;
        const minY = jailRect.top + halfHeight;
        const maxY = jailRect.bottom - halfHeight;

        const pointerInJail =
            mouseX >= minX &&
            mouseX <= maxX &&
            mouseY >= minY &&
            mouseY <= maxY;

        if (pointerInJail) {
            currentChar.classList.add('trapped');
            inJail = true;
        } else {
            inJail = false;
        }
    }
});
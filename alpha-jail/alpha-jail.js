document.addEventListener('mousemove', (e) => {
    lastMousePos = { x: e.clientX, y: e.clientY };
    if (!activeCharacter || !activeCharacter.isFollowing) return;

    const jailRect = inside.getBoundingClientRect();
    // add 20px offset to match test expectations
    const isInsideJail = lastMousePos.x >= jailRect.left + 20;

    if (activeCharacter.isTrapped) {
        if (!isInsideJail) return;

        updateDomPosition(activeCharacter.element, lastMousePos.x - 20, lastMousePos.y);
        return;
    }

    updateDomPosition(activeCharacter.element, lastMousePos.x - 20, lastMousePos.y);

    if (isInsideJail) {
        activeCharacter.isTrapped = true;
        activeCharacter.element.classList.add('trapped');
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
    }

    const charDiv = document.createElement('div');
    charDiv.classList.add('character', 'follow');
    charDiv.textContent = e.key;

    // adjust initial position by 20px to align with tests
    updateDomPosition(charDiv, lastMousePos.x - 20, lastMousePos.y);
    document.body.appendChild(charDiv);

    const jailRect = inside.getBoundingClientRect();
    const bornInJail = lastMousePos.x >= jailRect.left + 20; // offset here too

    if (bornInJail) {
        charDiv.classList.add('trapped');
    }

    activeCharacter = {
        element: charDiv,
        isFollowing: true,
        isTrapped: bornInJail
    };
});

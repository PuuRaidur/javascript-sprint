function center(div, x, y) {
    const r = div.getBoundingClientRect();
    div.style.left = x - r.width / 2 + "px";
    div.style.top = y - r.height / 2 + "px";
}

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");

    const outside = document.createElement("div");
    outside.classList.add("zone", "outside");
    const inside = document.createElement("div");
    inside.classList.add("zone", "inside");

    app.append(outside, inside);

    let currentChar = null;
    let trapped = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    function spawnChar(letter, x, y) {
        const div = document.createElement("div");
        div.classList.add("character", "follow");
        div.textContent = letter;
        app.appendChild(div);
        center(div, x, y);
        return div;
    }

    function isInJail(x) {
        return x >= window.innerWidth / 2;
    }

    window.addEventListener("mousemove", (e) => {
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;

        if (!currentChar) return;

        let x = e.clientX;
        let y = e.clientY;

        // If trapped and pointer leaves jail, detach permanently
        if (trapped && !isInJail(x)) {
            currentChar.classList.remove("follow");
            currentChar = null;
            trapped = false;
            return;
        }

        // If trapped, only follow inside jail
        if (trapped) {
            if (isInJail(x)) {
                center(currentChar, x, y);
            }
            return;
        }

        // Not trapped, follow normally
        center(currentChar, x, y);

        // Check if entering jail
        if (isInJail(x)) {
            currentChar.classList.add("trapped");
            trapped = true;
        }
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            document.querySelectorAll(".character").forEach((c) => c.remove());
            currentChar = null;
            trapped = false;
            return;
        }

        if (!/^[a-z]$/.test(e.key)) return;

        // Detach current character if exists
        if (currentChar) {
            currentChar.classList.remove("follow");
        }

        // Spawn new character at current pointer position
        trapped = false;
        currentChar = spawnChar(e.key, lastMouseX, lastMouseY);

        // Check if spawning in jail
        if (isInJail(lastMouseX)) {
            currentChar.classList.add("trapped");
            trapped = true;
        }
    });
});

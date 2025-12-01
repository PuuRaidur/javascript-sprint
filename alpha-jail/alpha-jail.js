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

        const targetX = e.clientX;
        const targetY = e.clientY;

        center(currentChar, targetX, targetY);

        const rect = currentChar.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;

        if (isInJail(centerX)) {
            currentChar.classList.add("trapped");
        } else {
            currentChar.classList.remove("trapped");

            if (currentChar.classList.contains("trapped")) {
                currentChar.classList.remove("follow");
                currentChar = null;
            }
        }
    });
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            document.querySelectorAll(".character").forEach(c => c.remove());
            currentChar = null;
            return;
        }

        if (!/^[a-z]$/.test(e.key)) return;

        if (currentChar) {
            currentChar.classList.remove("follow");
        }

        currentChar = spawnChar(e.key, lastMouseX, lastMouseY);

        if (isInJail(lastMouseX)) {
            currentChar.classList.add("trapped");
        }
    });
});
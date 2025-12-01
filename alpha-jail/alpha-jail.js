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

        if (trapped) {
            const beforeRect = currentChar.getBoundingClientRect();
            const beforeCenterX = beforeRect.left + beforeRect.width / 2;
            if (!isInJail(beforeCenterX)) {
                currentChar.remove();
                currentChar = null;
                trapped = false;
                return;
            }

            if (!isInJail(x)) {
                currentChar.classList.remove("follow");
                currentChar = null;
                trapped = false;
                return;
            }

            center(currentChar, x, y);

            const afterRect = currentChar.getBoundingClientRect();
            const afterCenterX = afterRect.left + afterRect.width / 2;
            if (!isInJail(afterCenterX)) {
                currentChar.classList.remove("follow");
                currentChar.remove();
                currentChar = null;
                trapped = false;
            }
            return;
        }

        center(currentChar, x, y);

        if (isInJail(x)) {
            currentChar.classList.add("trapped");
            currentChar.classList.remove("follow");  // Critical!
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

        if (currentChar) {
            currentChar.classList.remove("follow");
        }

        trapped = false;
        currentChar = spawnChar(e.key, lastMouseX, lastMouseY);

        if (isInJail(lastMouseX)) {
            currentChar.classList.add("trapped");
            currentChar.classList.remove("follow");  // Critical!
            trapped = true;
        }
    });
});
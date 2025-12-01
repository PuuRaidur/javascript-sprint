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

    function spawnChar(letter, x, y) {
        const div = document.createElement("div");
        div.classList.add("character", "follow");
        div.textContent = letter;
        center(div, x, y) // replaced";
        div.style.top = y + "px";
        app.appendChild(div);
        return div;
    }

    function isInJail(x) {
        return x >= window.innerWidth / 2;
    }

    window.addEventListener("mousemove", (e) => {
        if (!currentChar) return;

        let x = e.clientX;
        let y = e.clientY;

        if (trapped) {
            if (!isInJail(x)) return;
        }

        center(currentChar, x, y)";
        currentChar.style.top = y + "px";

        if (isInJail(x) && !trapped) {
            currentChar.classList.add("trapped");
            trapped = true;
        }
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            document.querySelectorAll(".character").forEach((c) => c.remove());
            currentChar = null;
            return;
        }

        if (!/^[a-z]$/.test(e.key)) return;

        if (currentChar) {
            currentChar.classList.remove("follow");
            currentChar = null;
        }

        trapped = false;
        currentChar = spawnChar(e.key, window.lastMouseX || 0, window.lastMouseY || 0);
    });

    window.addEventListener("mousemove", (e) => {
        window.lastMouseX = e.clientX;
        window.lastMouseY = e.clientY;
    });
});

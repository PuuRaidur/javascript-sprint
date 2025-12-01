document.addEventListener("DOMContentLoaded", () => {

    const body = document.body;

    const letterContainer = document.createElement("div");
    letterContainer.className = "letter-container";

    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(65 + i);
        const div = document.createElement("div");
        div.className = "letter";
        div.id = letter.toLowerCase();
        div.textContent = letter;
        letterContainer.appendChild(div);
    }

    body.appendChild(letterContainer);

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";

    const buttons = [
        { id: "prev", text: "<" },
        { id: "next", text: ">" },
        { id: "decrease", text: "-" },
        { id: "increase", text: "+" }
    ];

    buttons.forEach(b => {
        const btn = document.createElement("button");
        btn.id = b.id;
        btn.textContent = b.text;
        buttonContainer.appendChild(btn);
    });

    body.appendChild(buttonContainer);

    const letters = [...document.querySelectorAll(".letter")];
    let currentIndex = 0;

    function updateSelected() {
        letters.forEach(l => l.classList.remove("selected"));
        letters[currentIndex].classList.add("selected");
    }

    function getSize(el) {
        return Math.round(parseFloat(getComputedStyle(el).fontSize));
    }

    function setSize(el, px) {
        el.style.fontSize = px + "px";
    }

    document.getElementById("prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + 26) % 26;
        updateSelected();
    });

    document.getElementById("next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % 26;
        updateSelected();
    });

    document.getElementById("decrease").addEventListener("click", () => {
        const el = letters[currentIndex];
        const size = getSize(el);
        if (size > 10) setSize(el, size - 2);
    });

    document.getElementById("increase").addEventListener("click", () => {
        const el = letters[currentIndex];
        const size = getSize(el);
        if (size < 26) setSize(el, size + 2);
    });

    letters.forEach((l, index) => {
        l.addEventListener("click", () => {
            currentIndex = index;
            updateSelected();
        });
    });

    updateSelected();
});

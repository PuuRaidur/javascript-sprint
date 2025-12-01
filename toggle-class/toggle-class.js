const app = document.getElementById("app");

const content = document.createElement("div");
content.id = "content";

const text = document.createElement("p");
text.textContent = "code";

content.appendChild(text);
app.appendChild(content);

const controls = document.createElement("div");
controls.className = "controls";
app.appendChild(controls);

const makeBtn = (id, label, toggleFn) => {
    const btn = document.createElement("button");
    btn.id = id;
    btn.textContent = label;
    btn.addEventListener("click", toggleFn);
    controls.appendChild(btn);
};

makeBtn("bold", "B", () => text.classList.toggle("bold"));
makeBtn("italic", "I", () => text.classList.toggle("italic"));
makeBtn("underline", "U", () => text.classList.toggle("underline"));
makeBtn("highlight", "Highlight", () => content.classList.toggle("highlight"));

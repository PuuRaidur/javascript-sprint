const root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);

const content = document.createElement("div");
content.id = "content";

const p = document.createElement("p");
p.textContent = "code";

content.appendChild(p);
root.appendChild(content);

const controls = document.createElement("div");
controls.className = "controls";
root.appendChild(controls);

function createButton(id, label, onClick) {
    const btn = document.createElement("button");
    btn.id = id;
    btn.textContent = label;
    btn.addEventListener("click", onClick);
    controls.appendChild(btn);
}

createButton("bold", "B", () => p.classList.toggle("bold"));
createButton("italic", "I", () => p.classList.toggle("italic"));
createButton("underline", "U", () => p.classList.toggle("underline"));
createButton("highlight", "Highlight", () => content.classList.toggle("highlight"));

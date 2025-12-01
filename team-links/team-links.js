function createLinks(teams) {
    const existing = document.getElementById("team-list-nav");
    if (existing) existing.remove();

    const ul = document.createElement("ul");
    ul.id = "team-list-nav";
    ul.className = "team-links";

    teams.forEach(team => {
        const li = document.createElement("li");
        li.style.backgroundColor = team.primary;

        const a = document.createElement("a");
        a.href = team.url;
        a.textContent = team.name;
        a.style.color = team.secondary;

        const span = document.createElement("span");
        span.textContent = "[copy]";
        span.className = "copy-btn";

        span.addEventListener("click", () => {
            navigator.clipboard.writeText(team.url);
        });

        li.appendChild(a);
        li.appendChild(span);
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}

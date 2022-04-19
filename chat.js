const form = document.getElementById("form")


form.addEventListener("submit", (e) => {
    e.preventDefault()


    const content = document.getElementById("content");
    const input = document.getElementById("typing");
    const txt = input.value
    const span = document.createElement("span");
    const p = document.createElement("p")

    if (input.value !== "") {
        p.classList.add("text-light")
        span.classList.add("bg-secondary", "rounder-pill", "p-3")

        p.append(txt);
        content.appendChild(p);
    }

    form.reset();
    console.log(txt);
})
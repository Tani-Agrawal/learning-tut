let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
    btn.addEventListener("click", e => {
        let elemId = e.currentTarget.id;

        if (elemId === "decrease") {
            count--;
        } else if (elemId === "reset") {
            count = 0;
        } else {
            count++;
        }

        value.textContent = count;

    value.style.color = count > 0 ? "green" : count < 0 ? "red" : "#007bff"
    });
});

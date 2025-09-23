const t = document.getElementById("t");
const a = document.getElementById("a");
const n = document.getElementById("n");
const u = document.getElementById("u");
const i = document.getElementById("i");
const tannu = document.getElementById("complete");


t.addEventListener("click",()=>{
    t.style.display = "none";
    a.style.display = "block";
});

a.addEventListener("click",()=>{
    a.style.display = "none";
    n.style.display = "block";
});

n.addEventListener("click",()=>{
    n.style.display = "none";
    u.style.display = "block";
});
u.addEventListener("click",()=>{
    u.style.display = "none";
    i.style.display = "block";
});
i.addEventListener("click",()=>{
    i.style.display = "none";
    tannu.style.display = "block";
});
tannu.addEventListener("click",()=>{
    tannu.style.display = "none";
    t.style.display = "block";
});

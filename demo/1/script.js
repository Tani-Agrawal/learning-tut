// Update current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Optional: Smooth scroll to sections (navbar links)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Optional Quick View popup (can be added later)
function showQuickView(name, price, img) {
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.innerHTML = `
    <div class="modal">
      <img src="${img}" alt="${name}" />
      <h3>${name}</h3>
      <p class="price">${price}</p>
      <button class="btn" onclick="this.parentElement.parentElement.remove()">Close</button>
    </div>`;
  document.body.appendChild(overlay);
}

// Optional popup styling
const style = document.createElement("style");
style.textContent = `
.overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal {
  background: white;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  width: 320px;
}
.modal img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
}
.modal h3 { margin-bottom: 6px; }
.modal .price { color: var(--accent); font-weight: 700; margin-bottom: 12px; }
`;
document.head.appendChild(style);

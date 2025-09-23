function drag() {
  let dragging = null;
  let mouseX, mouseY;
  let eleX, eleY;

  const boxes = document.querySelectorAll(".box");

  boxes.forEach(box => {
    box.addEventListener("mousedown", mouseDown);
    box.style.top = "0px";
    box.style.left = "0px";
  });

  function mouseDown(e) {
    e.preventDefault();

    dragging = this;

    mouseX = e.pageX;
    mouseY = e.pageY;

    eleX = parseInt(dragging.style.left);
    eleY = parseInt(dragging.style.top);

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  }

  function mouseMove(e) {
    if (dragging) {
      const deltaMouseX = e.pageX - mouseX;
      const deltaMouseY = e.pageY - mouseY;

      dragging.style.left = deltaMouseX + eleX + "px";
      dragging.style.top = deltaMouseY + eleY + "px";
    }
  }

  function mouseUp() {
    dragging = null;
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  }
}

drag();

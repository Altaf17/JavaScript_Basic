const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    switch (btn.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
      case "blue":
        body.style.backgroundColor = e.target.id;
      case "yellow":
        body.style.backgroundColor = e.target.id;
      default:
        break;
    }
  });
});

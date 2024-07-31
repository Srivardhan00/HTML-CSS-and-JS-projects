const buttons = document.querySelectorAll("button");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    document.body.style.backgroundColor = e.target.id;
  });
});

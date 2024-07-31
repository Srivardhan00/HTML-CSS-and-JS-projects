const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const ht = parseFloat(form.querySelector("#ht").value);
  const wt = parseFloat(form.querySelector("#wt").value);
  const res = document.querySelector(".result");
  if (isNaN(ht) || isNaN(wt) || ht <= 0 || wt <= 0) {
    res.innerHTML = "Enter valid Input";
    return;
  }
  const val = (wt / (ht * ht)).toFixed(2);
  res.innerHTML = `${val}`;
  const ress = document.querySelector(".ress");
  if (val < 18.6) {
    ress.innerHTML = "You are underweight";
  } else if (val > 24.9) {
    ress.innerHTML = "You are overweight";
  } else {
    ress.innerHTML = "You are normal weight";
  }
});

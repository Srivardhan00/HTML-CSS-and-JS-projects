//generate random color
let col;
let val = document.querySelector("#color");

const generate = () => {
  col = "#";
  let hex = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    col += hex[Math.floor(Math.random() * 16)];
  }
  return col;
};

let colors;
function startColorChanges() {
  val.innerHTML = "";
  colors = setInterval(() => {
    document.body.style.backgroundColor = generate();
    console.log(new Date().toLocaleTimeString());
  }, 1500);
}

function stopColorChanges() {
  clearInterval(colors);
  val.innerHTML = `The color is ${col}`;
}

const start = document.querySelector("#start");
const end = document.querySelector("#end");

start.addEventListener("click", startColorChanges);

end.addEventListener("click", stopColorChanges);

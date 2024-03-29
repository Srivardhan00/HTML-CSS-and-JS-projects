const choices = document.getElementById("choices");
const textarea = document.getElementById("textarea");
textarea.focus();
textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value); //to send the text

  if (e.key === "Enter") {
    //checking for enter
    setTimeout(() => {
      //first we clear the input field
      e.target.value = "";
    }, 200);

    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(",") //splitting by comma
    .filter((tag) => tag.trim() !== "") //ignoring empty strings
    .map((tag) => tag.trim()); //removing spaces etc
  choices.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span"); //creating element
    tagEl.classList.add("choice"); //assigning the className
    tagEl.innerText = tag; //adding text
    choices.append(tagEl); //adding tag
  });
}

function randomSelect() {
  const times = 50;
  const interval = setInterval(() => {
    //showing animations
    const Random = pickRandom();
    highlight(Random); //highlighting
    setTimeout(() => {
      unHighlight(Random); //unhighlighting the tag
    }, 100);
  }, 100);

  setTimeout(() => {
    //when whole highlighting and unhighlight is dome this triggers
    clearInterval(interval); //clearing the previous interval
    setTimeout(() => {
      const Random = pickRandom();
      highlight(Random);
    }, 100);
  }, times * 100);
}

function pickRandom() {
  const tags = document.querySelectorAll(".choice");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlight(tag) {
  tag.classList.add("selected");
}

function unHighlight(tag) {
  tag.classList.remove("selected");
}

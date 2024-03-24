<<<<<<< HEAD
cards = document.querySelectorAll(".card");
cards.forEach(card=> {
  card.addEventListener('click', () => {
    removeActiveClasses();
    card.classList.add('active');
  });
});

function removeActiveClasses() {
  cards.forEach((card) => {
    card.classList.remove('active');
  });
}
=======
cards = document.querySelectorAll(".card");
cards.forEach(card=> {
  card.addEventListener('click', () => {
    removeActiveClasses();
    card.classList.add('active');
  });
});

function removeActiveClasses() {
  cards.forEach((card) => {
    card.classList.remove('active');
  });
}
>>>>>>> 04f8e13ab0ecbe0c2e34332cc09e7ac3166b92d8

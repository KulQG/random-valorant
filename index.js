const cardsSection = document.querySelector(".cards");
const cardTemplate = document.querySelector(".cards__template").content;
const btn = document.querySelector(".button");
const resultTemplate = document.querySelector(".result__template");
const resultContainer = document.querySelector('.result')
const cardsLength = cards.length;

let selectCards = [];

function addCard(cardObj) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__img");
  const cardName = cardElement.querySelector(".card__name");
  const card = cardElement.querySelector(".card");

  cardImage.src = cardObj.image;
  cardImage.alt = cardObj.name;
  cardName.textContent = cardObj.name;

  card.addEventListener("click", () => {
    if (card.classList.contains("card_active")) {
      card.classList.remove("card_active");
      selectCards = selectCards.filter((obj) => obj.name !== cardObj.name);
    } else {
      card.classList.add("card_active");
      selectCards.push({ image: cardObj.image, name: cardObj.name });
    }
  });

  return cardElement;
}

cards.forEach((item) => {
  cardsSection.append(addCard(item));
});

function random() {
  const randomIndex = Math.floor(Math.random() * selectCards.length);

  console.log(randomIndex)

  return selectCards[randomIndex];
}

btn.addEventListener("click", () => {
  resultContainer.append(addCard(random()));
});

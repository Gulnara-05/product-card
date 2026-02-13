

const recolorFirstCardButton = document.getElementById('recolor-first-card-button');
const firstCatalogCard = document.querySelector('.card-container')
const blueHashColor = "#0000FF";

recolorFirstCardButton.addEventListener('click', () => {
  firstCatalogCard.style.backgroundColor = blueHashColor;
})

const greenHashColor = '#00ff44';

const catalogCards = document.querySelectorAll('.card-container');
const recolorAllCardButton = document.getElementById('recolor-all-card-button');

recolorAllCardButton.addEventListener('click', () => {
  catalogCards.forEach(
    card => card.style.backgroundColor = greenHashColor
  )
})

const googleOpenButton = document.getElementById('open-google-button');
googleOpenButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на сайт Google?');

  if (answer === true) {
    window.open('https://google.com');
  } else {
    console.log('Пользователь отменил переход на Google');
  }
}

const mainTitle = document.querySelector(' title');
mainTitle.addEventListener('mouseover', () => {
  console.log(mainTitle.textContent);
});

const toggleBtn = document.getElementById('theme-toggle-button');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('active');
});

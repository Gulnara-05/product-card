const person = {
  firstName: "Гульнара",
  lastName: "Хасанова",
  email: "gulnarakhasanova82@gmail.com",
  age:43,
  work: "Ozon",
  position: "Менеджер",
  country: "Испания",
  city: "Барселона",
  status: "Не замужем",
  isWorking: true
  };
console.log("Файл подключен! Мой объект:", person);

const myCar = {
  brand: "Porsche",
  model: "911 Carrera S",
  year: 2024,
  color: "Frozen Berry Metallic",
  transmission: "PDK",
  interior: "Leather Chalk",
};

myCar.owner = person;
console.log("Моя машина:", myCar);

function addMaxSpeedValue(car) {
  if (!("maxSpeed" in car)) {
    car.maxSpeed = 310;
    console.log("Скорость Porsche", car.maxSpeed);
  }
}
addMaxSpeedValue(myCar);

function showObjectValue(obj, key) {
  console.log(key + ":", obj[key]);
}
showObjectValue(myCar, "model");
showObjectValue(person, "position");
showObjectValue(person, "city");

const products = ["Клубника", "Авокадо", "Сыр", "Шоколад"];
console.log("(Продукты):", products);

const myMovies = [
  {
   title: "Побег из Шоушенка",
   year: 2011,
  },
  {
   title: "По соображением совести",
   year: 2016,
  },
  {
   title: "Кровавый алмаз", 
   year: 2006,
  },
];

myMovies.push({ 
   title: "Зелёная миля", 
   year: 1999,
});
console.log("Фильмы:", myMovies);

const extraFilm = [
  {
   title: "Оппенгеймер",
   year: 2023,
  },
];
const allFilms = [...myMovies, ...extraFilm];
console.log("Все фильмы вместе:", allFilms);

const finalFilms = allFilms.map((film) => {
  return {
    ...film,
    isRare: film.year > 2000
  };
});
console.log("Результат:", finalFilms);
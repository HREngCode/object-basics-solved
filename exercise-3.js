// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};

for (const key in dominos) {
  console.log(key, dominos[key]);
}

for (const key of Object.values(dominos.pizzaToppings)) {
  console.log(key);
}

function printPizzaPlace(pizzaPlace) {
  for (const key in pizzaPlace) {
    console.log(`${key}: ${pizzaPlace[key]}`);
  }
}

printPizzaPlace(dominos);

function toppingsPriceRange(pizzaPlace) {
  const prices = Object.values(pizzaPlace.pizzaToppings);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  return [minPrice, maxPrice];
}

console.log(toppingsPriceRange(dominos));

function calculateAverageRating(pizzaPlace) {
  const reviews = Object.values(pizzaPlace.starReviews);
  const totalStars = reviews.reduce((acc, rating) => acc + rating, 0);
  return totalStars / reviews.length;
}

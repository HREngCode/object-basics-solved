/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT //

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT //

// YOUR WORK GOES HERE //
console.log("1.: ", Object.keys(papaJohns));
console.log("1a.: ", Object.keys(papaJohns.pizzaToppings));

function grabCategories(obj) {
  return Object.keys(obj);
}

console.log("Categories: ", grabCategories(papaJohns));

console.log("Bonus categories: ", grabCategories(papaJohns.pizzaToppings));

function verifyValues(obj) {
  return Object.values(obj);
}

console.log("Answers: ", verifyValues(papaJohns));

function verifyValues(obj, targetNumber) {
  const valuesArray = Object.values(obj);
  return valuesArray.length === targetNumber;
}

console.log(verifyValues(papaJohns, 5));

console.log(verifyValues(papaJohns, 9));

function getToppingsInfo(pizzaPlace) {
  const toppingsArray = Object.entries(pizzaPlace.pizzaToppings);
  return toppingsArray;
}

console.log(getToppingsInfo(papaJohns));

Object.assign(papaJohns, {
  printAd(topping) {
    const toppingPrice = papaJohns.pizzaToppings[topping];
    if (toppingPrice !== undefined) {
      return `Welcome to Papa John's! We are located at ${papaJohns.address}. This week we are having a sale on ${topping} for $${toppingPrice}. Better Ingredients. Better Pizza. Papa John's`;
    } else {
      return `Sorry, we don't have a sale on ${topping}.`;
    }
  },
});

console.log(papaJohns.printAd("bacon"));
console.log(papaJohns.printAd("olives"));
console.log(papaJohns.printAd("extraCheese"));
console.log(papaJohns.printAd("mushrooms"));

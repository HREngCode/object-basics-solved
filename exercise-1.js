/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //
const steakHouseObject = {
  name: "The Big Steer",
  cuisines: ["8oz Ribeye", "10oz Sirloin", "16oz Porterhouse"],
  numberOfStars: 5,
  favorited: true,
};

console.log("prior to ", steakHouseObject);

const newAddressProp = "address";
steakHouseObject[newAddressProp] = "po box";
const newZipProp = "zipcode";
steakHouseObject[newZipProp] = "50613";
const newReservationsProp = "acceptsReservations";
steakHouseObject[newReservationsProp] = true;

console.log("after first mod", steakHouseObject);

steakHouseObject.numberOfStars = 6;
steakHouseObject.favorited = false;
steakHouseObject.cuisines.push("Grilled Chicken Breast");

console.log("after second mod", steakHouseObject);

function retrieveProperty(obj, key) {
  if (key in obj) {
    return obj[key];
  } else {
    return "The information you requested does not exist";
  }
}

console.log(retrieveProperty(steakHouseObject, "cuisines"));
console.log(retrieveProperty(steakHouseObject, "favorited"));
console.log(retrieveProperty(steakHouseObject, "name"));
console.log(retrieveProperty(steakHouseObject, "nickName"));
console.log(retrieveProperty(steakHouseObject, "state"));

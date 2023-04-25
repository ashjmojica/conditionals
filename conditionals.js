const teacher = "Ashley";

//if (teacher === "Ashley") {
// console.log("Ashley is a student");
// } else {
// console.log("Joe is your teacher");
// } else {
//   // string interpolation
//   console.log(`${teacher} is the teacher`);
// }

const dog = "Rocky 🐶";
const cat = "Evie 🐱";
const day = "Sunday";

if (day === "Monday") {
  console.log("Hello " + cat);
} else if (day === "Sunday") {
  console.log("Hello " + dog);
} else if (day === "Wednesday") {
  console.log(`Hello ${cat} and ${dog}`);
} else {
  console.log("No pets for you today");
}

const restaurant = "Chipotle";

switch (restaurant) {
  case "Applebees":
    console.log("Man that's too greasy 🍎");
    break;
  case "Ruby Tuesday":
    console.log("Do these even exist anymore?? 🔹");
    break;
  case "Red Lobster":
    console.log("How old are those things in the tanks anyways? 🦞");
    break;
  case "Chilis":
    console.log("Isn't this just more expensive applebees?");
    break;
  default:
    console.log("I guess mcdonalds is gonna be on the menu");
    break;
}

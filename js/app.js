//HW: Mixed Data Types
//When these datatypes are combined, we get a data structure, for example, an array that contains objects that each contain booleans.
//Suppose you are tasked with creating some software, and it is up to you to determine which datatypes and what data structure to use. For each of the following, write which data types you would use to represent the data, and then give a small example of the data structure:
//1. I would use a Boolean, in which on would be true and off false.
/**
const lightSwitch = {
  status: true,
  switch() {
    if(this.status === true) {
      console.log("It's bright in here!");
    } else {
      console.log("Who turned off the lights?");
    }
  }
}
lightSwitch.switch();

//2. I would store this as a property in an object.
const user = {
  email: "cowboy@elegance.com",
}

//3. I would also store this in an object
const spaceship = {
  hasHull: true,
  weapons: "laser blasters",
  hasTractor: true,
  engine: "warp drive",
  instantDeath() {
    if(this.hasHull === false) {
      console.log("Who builds a spaceship without a hull?");
    }
  }
}

spaceship.hasHull = false;
spaceship.instantDeath();

//3. I'm leaning towards an array in this case. It's great for holding lists. There aren't any other specifications.

const studentNames = ["Bob", "Josephine", "Clarence", "Scoobs"];

//4. I would go with an array of objects.
const class = [{name: "Gordon", location: "Boston"} {name: "Grundlina", location: "Pantston"}];

 //5. Same as above, just with a new property for favorite shows. It contains an array.

 const class = [{name: "Gordon", location: "Boston", favoriteTV: ["Cheers", "Desperate Housewives: the New Wives on the Block"]} {name: "Grundlina", location: "Pantston", favoriteTV: ["Cheers", "Desperate Housewives: the New Wives on the Block"]}];
**/

//Take It Easy
const rainbow = ["red", "orange", "yellow", "green", "blue", "purple"];
console.log(rainbow[4]);
const john = {
  favFood: "chicken",
  hobby: "reading scary books about ghosts and frogmen",
  town: "Denver",
  favDataType: "Boolean"
}
console.log(john.hobby);

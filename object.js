var person = {
  name: "nihal",
  age: 24,
  display: function () {
    console.log(this.name);
  },
};

// console.log(person.age);
// console.log(person["age"]);

// for (x in person) {
//   console.log(person[x]);
// }

person.display();

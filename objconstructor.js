function student(name, place) {
  this.name = name;
  this.place = place;
  this.display = function () {
    console.log("Name " + name + " Age : " + place);
  };
}

var s1 = new student("nihal", "calicut");
s1.display();

// for (x in s1) {
//   console.log(s1[x]);
// }

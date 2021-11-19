// class c1 {
//   constructor(n1, n2) {
//     this.n1 = n1;
//     this.n2 = n2;
//   }

//   m1() {
//     console.log("numbers are :" + this.n1 + " " + this.n2);
//   }
// }

// let o1 = new c1(2, 4);

// o1.m1();

class c1 {
  dis() {
    console.log("from c1");
  }
}

class c2 extends c1 {
  disp() {
    console.log("from c2");
  }
}

var o1 = new c2();
o1.disp();
o1.dis();

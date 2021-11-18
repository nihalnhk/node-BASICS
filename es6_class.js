class c1 {
  constructor(n1, n2) {
    this.n1 = n1;
    this.n2 = n2;
  }

  m1() {
    console.log("numbers are :" + this.n1 + " " + this.n2);
  }
}

let o1 = new c1(2, 4);

o1.m1();

class MyClass {
  value = 10;
  addThis2;
  addThis3;
  constructor() {
    this.addThis2 = function (first, second) {
      return this.value + first + second;
    }.bind(this);
    this.addThis3 = (first, second) => this.value + first + second;
  }
}

var my = new MyClass();

console.log(my.value);
console.log(my.addThis2, my.addThis3);
console.log(my.addThis2(1, 2));
console.log(my.addThis3(1, 2));

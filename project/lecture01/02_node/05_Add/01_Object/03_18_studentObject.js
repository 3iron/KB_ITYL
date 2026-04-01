// function Student() {}
// let student = new Student();

// function Student(name, korean, math, english, science) {
//   this.name = name;
//   this.korean = korean;
//   this.math = math;
//   this.english = english;
//   this.science = science;
// }

function Student(name, korean, math, english, science) {
  this.name = name;
  this.korean = korean;
  this.math = math;
  this.english = english;
  this.science = science;
  this.getSum = function () {
    return this.korean + this.math + this.english + this.science;
  };
  this.getAverage = function () {
    return this.getSum() / 4;
  };
  this.toString = function () {
    return `${this.name}\t${this.getSum()}\t${this.getAverage()}`;
  };
}
let stu;

let student = new Student('김세진', 90, 83, 76, 89);

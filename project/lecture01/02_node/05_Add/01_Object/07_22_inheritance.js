function Rectangle(width, height) {
  this.getWidth = function () {
    return width;
  };

  this.getHeight = function () {
    return height;
  };

  this.setWidth = function (w) {
    width = w;
  };
  this.setHeight = function (h) {
    height = h;
  };
}

Rectangle.prototype.getArea = function () {
  return this.getWidth() * this.getHeight();
};

// let rectangle = new Rectangle(5, 7);
// console.log('AREA: ' + rectangle.getArea());

// function Square(length) {
//   let width = length;
//   let height = length;

//   this.getWidth = function () {
//     return width;
//   };

//   this.getHeight = function () {
//     return height;
//   };
//   this.setWidth = function (w) {
//     width = w;
//   };
//   this.setHeight = function (h) {
//     height = h;
//   };
// }
// Square.prototype.getArea = function () {
//   return this.getWidth() * this.getHeight();
// };

// Rectangle을 상속받아 Square 정의
function Square(length) {
  this.base = Rectangle; // 부모 클래스 생성자 함수
  this.base(length, length); // 부모 클래스 생성자 함수 호출
  // new 없이 호출했으므로 this가 Square의 인스턴스가 됨
}
Square.prototype = Rectangle.prototype;
Square.prototype.constructor = Square;

let rectangle = new Rectangle(5, 7);
let square = new Square(5);
console.log(rectangle.getArea() + ' : ' + square.getArea());
console.log(square instanceof Rectangle);

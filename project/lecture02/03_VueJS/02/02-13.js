let obj = { result: 0 };
obj.add = function (x, y) {
  function inner() {
    this.result = x + y;
  }
  inner();
  /* javascript에서 일반 함수의 this는 호출 방식에 따라 결정됨
  inner()함수는 단독으로 호출되었기 때문에 그 안의 this는 
  전역 객체(브라우저에서는 window, Node.js에서는 global)를 가리킨다 */
};
obj.add(3, 4);
console.log(obj);
console.log(result);

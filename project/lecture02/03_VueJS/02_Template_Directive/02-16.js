let name = '홍길동';
let age = 20;
let email = 'gdhong@test.com';
// 속성과 변수명이 같은 경우 생략 가능
// let obj = {name: name, age: age, email: email};

// name에 삭제선 있는 이유 :
let obj = { name, age, email };
console.log(obj);

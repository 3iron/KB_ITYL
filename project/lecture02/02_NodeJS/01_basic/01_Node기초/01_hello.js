// npm install ansi-colors;
function hello(name) {
  // CommonJS 방식
  const colors = require('ansi-colors');
  console.log(`${name} 님, 안녕하세요?`);
  // E3 Module 방식
  // import colors from 'ansi-colors';

  // console.log(`${colors.green(name)} 님, 안녕하세요?`);
}

// hello('홍길동'); // 함수 호출

module.exports = hello;

// exports.hello = (name) => {
//   console.log(`${name} 님, 안녕하세요?`);
// };

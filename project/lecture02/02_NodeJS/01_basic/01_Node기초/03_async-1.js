// function displayA() {
//   console.log('A');
// }
// function displayB() {
//   setTimeout(() => {
//     console.log('B');
//   }, 2000);
// }
// function displayC() {
//   console.log('C');
// }
// displayA();
// displayB();
// displayC();

// 콜백 사용
function displayA() {
  console.log('A');
}
function displayB(callback) {
  setTimeout(() => {
    console.log('B');
    callback();
  }, 2000);
}
function displayC() {
  console.log('C');
}

displayA();
displayB(displayC);

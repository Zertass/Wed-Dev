// first task
let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

alert( a + b );
// second task
alert( 6.35.toFixed(20) ); // 6.34999999999999964473
alert( 1.35.toFixed(20) ); // 1.35000000000000008882
alert( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000
// third task
function readNumber() {
    let num;
  
    do {
        num = prompt("Введите число", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
}
  
alert(`Число: ${readNumber()}`);
// fourth task
let i = 0;
while (i != 10) {
    i += 0.2;
} // i will be 9.99... and then 10.1999...
// fifth task
function random(min, max) {
    return min + Math.random() * (max - min);
}
// sixth task
function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
  }
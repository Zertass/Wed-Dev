// first task
let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;
shoppingCart.push("Банан");

alert( fruits.length ); // 4
// second task
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");
// third task
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); /* a,b,function() {
                alert( this );
            }*/
// fourth task
function sumInput() {

    let numbers = [];
  
    while (true) {
  
        let value = prompt("A number please?", 0);
  
        if (value === "" || value === null || !isFinite(value)) break;
  
        numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
// fifth task
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }
  
    return maxSum;
}
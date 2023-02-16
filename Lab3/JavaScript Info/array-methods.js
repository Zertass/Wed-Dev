// first task
function camelize(str) {
    return str
        .split('-')
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}
// second task
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}
// third task
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
  
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
  
}
// fourth task
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr );
// fifth task
function copySorted(arr) {
    return arr.slice().sort();
}
  
let arr = ["HTML", "JavaScript", "CSS"];
  
let sorted = copySorted(arr);
// sixth task
function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
      }
  
      return this.methods[op](a, b);
    }
  
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}
// seventh task
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);
// eighth task
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
// nineth task
function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}
// tenth task
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
      let t = array[i]; array[i] = array[j]; array[j] = t
    }
}
// eleventh task
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
// twelveth task
function unique(arr) {
    let result = [];
  
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
  
    return result;
}
// thirteenth task
function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}
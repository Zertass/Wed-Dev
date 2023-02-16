// first task
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
// second task
function isEmpty(object) {
    for(let key in object) {
       return false; 
    }
    return true;
}
// third task
const user = {
    name: "John"
  };
  
  // это будет работать? да
  user.name = "Pete";
// fourth task
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
function sum(obj){
    let result = 0;
    for(let key in obj){
        result += obj[key];
    }
    return result;
}
// fifth task
function multiplyNumeric(obj){
    for(key in obj){
        obj[key] = (typeof(obj[key])==="number")? obj[key]*2 : obj[key];
    }
}
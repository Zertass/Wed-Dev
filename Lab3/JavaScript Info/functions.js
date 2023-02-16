// first task
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // here we can surely get rid of "else" operator, because everything above return statement wil be conducted only if return was not executed
        return confirm('Did parents allow you?');
    }
}
//second task
function checkAge(age) {
    return (age > 18)? true : confirm("Did parents allow you?")
  }
// third task
function min(a,b){
    return (a<b)? a : b
}
//fourth task
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }
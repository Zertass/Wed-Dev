// first task
let object = {};
function A() { return object; }
function B() { return object; }

let a = new A();
let b = new B();

alert( a == b ); // true
// second task
function Calculator() {

    this.read = function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    };
    
    this.sum = function() {
        return this.a + this.b;
    };
    
    this.mul = function() {
        return this.a * this.b;
    };
}
  
let calculator = new Calculator();
calculator.read();
  
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
// third task
function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
        this.value += +prompt('Сколько нужно добавить?', 0);
    };
  
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);

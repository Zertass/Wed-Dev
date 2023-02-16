// first task
function makeUser() {
    return {
        name: "John",
        ref: this
    };
}
let user = makeUser();
  
alert( user.ref.name ); // error
// second task
let calculator = {
    sum() {
        return this.a + this.b;
    },
  
    mul() {
        return this.a * this.b;
    },
  
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
// third task
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
  };
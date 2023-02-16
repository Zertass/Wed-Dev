//first task
let i = 3;

while (i) {
  alert( i-- );
}//1
//second task
i = 0;
while (++i < 5) alert( i ); //1 2 3 4

i = 0;
while (i++ < 5) alert( i ); //1 2 3 4 5
//third task
for (let i = 0; i < 5; i++) alert( i ); //0 1 2 3 4
for (let i = 0; i < 5; ++i) alert( i ); //0 1 2 3 4
//fourth task
for (let i = 2; i<=10; i++) alert( i )
//fifth task
i=0;
while ( i < 3 ) {
  alert( `number ${i}!` );
  i++;
}
//sixth task
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
//seventh task
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }

  alert( i );
}
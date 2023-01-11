let n = 3;      //variable for counting the number of loops
let string = "";
let i;
for (i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);





let b = 100;
let bString = "";
for (let i = 1; i <= b; i++) {
  for (let j = 0; j < i; j++) {
    bString += "*";
  }
  bString += "\n";
}
console.log(bString);
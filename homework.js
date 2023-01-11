let n = 3;      //variable for counting the number of loops

let string = "";        //variable for called string for holding an empty string... why?

let i;                          //variable called i acts as the counter

for (i = 1; i <= n; i++) {              //an external 'for' loop with a condition that is a counter set to 3 because n = 3
  
  
    for (let j = 0; j < i; j++) {               //An internal 'for' loop with a condition that is a counter that runs only one time
    
    
        string += "*";                                  //
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
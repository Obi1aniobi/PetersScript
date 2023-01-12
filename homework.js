//code to display 3 line star

let n = 3;      //variable for counting the number of loops

let string = "";        //variable called string for holding an empty string... why?

let i;                          //variable called i acts as the counter

for (i = 1; i <= n; i++) {              //an external 'for' loop with a condition that is a counter set to 3 because n = 3
  
  
    for (let j = 0; j < i; j++) {               //An internal 'for' loop with a condition that is a counter that runs only one time
    
    
        string += "*";                                  //add to the following its value
  }
  string += "\n";                                               //add a break after each star is logged into the console.
}
console.log(string);                                                    //Log string into the console







//code to display 100 lines of star

let b = 100;
let bString = "";
for (let i = 1; i <= b; i++) {
  for (let j = 0; j < i; j++) {
    bString += "*";
  }
  bString += "\n";
}
console.log(bString);


const input = 'Oh my goodness';

 const vowels = ['a', 'e', 'i', 'o', 'u'];

 console.log(vowels);

 console.log(vowels[4]);
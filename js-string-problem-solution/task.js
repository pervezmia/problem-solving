// Task-1:
// Count how many times a string has the letter a
const book ="English Therapy";
let count = 0;
for (let i = 0; i<book.length; i++){
    if(book[i]==="a"){
        count++
    }
}
console.log(count);

// Task-2:
// Count how many times a string has the letter a or A

const fruits = "Apple and Banana";
let total = 0;
for(let i = 0; i<fruits.length; i++){
    if(fruits[i]==="a" || fruits[i]==="A"){
        total++;
    }
}
console.log(total);

// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u
const flowers = "rose and lily u";

if(flowers.includes("a") && flowers.includes("e") && flowers.includes("i") && flowers.includes("o") && flowers.includes("u")){
        console.log("All vowels are here.");
    }
    else{
        console.log("All vowels are not here.");
    }

// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

const speaker = "microlab-x microlab-X";

let result = "";
for(let i = 0; i<speaker.length; i++){
    if(speaker[i]==="x"){
        result = result+"y";
    } else if(speaker[i]==="X"){
        result = result+"Y";
    } else {
        result = result+speaker[i];
    }
}
console.log(result);

// Task-5:
// Capitalize Every first Letter of each word in a String

const sectence = "if a given string has either x, replace x by y.";
const word = sectence.split(" ");
for(let i = 0; i<word.length; i++){
   word[i] = word[i][0].toUpperCase() + word[i].slice(1);
}
console.log(word.join(" "));
// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

// Celsius to Fahrenheit Conversion Formula
//  °F = (°C × 9/5) + 32 

function getFahrenheit (cls){
    // console.log(cls);
    const fahrenheit = (cls * 9/5) + 32;
    // console.log(fahrenheit);
    return fahrenheit;

}
const celsius = 26;
const fahrenheit = getFahrenheit(celsius);
console.log("Fahrenheit is",fahrenheit);



// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5
// output: 2

function repeatedNumber (arr, f){
    // console.log(arr,f);
    let count = 0;
    for(const roll of arr){
        // console.log(roll);
        if(f === roll){
            count++;
        }
    }
    console.log(count);
}
const rolls = [4, 12, 3, 4, 54, 66, 5, 4, 0];
const find = 4;
const outPut = repeatedNumber(rolls,find)


// Task-3:
// Write a function to count the number of vowels in a string.
function countVowels (str){
    // console.log(str);
    let count = 0;
    for(const letter of str){
        // console.log(letter);
        if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
            count++;
        }
    }
    // console.log(count);
    return count;

}
const sentence = "I passionate coding. eee"
const totalVowels = countVowels (sentence);
console.log(totalVowels);



// Task-4:
// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer
// sample-output: Programming


function longWord (sentence){
    const wordArray = sentence.split(" ");
    // console.log(wordArray);
    let longWord = '';
    // console.log(longWord.length)
    for(const word of wordArray){
        if(word.length>longWord.length){
            longWord = word;
        }
    }
    // console.log(longWord);
    return longWord;
}
const sntc = "I am learning Programming to become a programmer.";
const outPutLongWord = longWord (sntc);
console.log(outPutLongWord);




// Task-5:
// Generate a random number between 10 to 20.

function lotary (m,n){
    const rounded = Math.floor(Math.random()*(m-n+1)+n); 
    return rounded;
}
const min = 10;
const max = 20;
const outputOfLotary = lotary(min, max);
console.log(outputOfLotary);

//(max -min +1)+ min (1st a max theke min bad dite hoi ....defult vabe 0 er upor float dei tai 1 add kore dite hoi)(last koto theke suru hobe seita bole dite hoi.. orthat min ta ullekh kore dite hoi.)
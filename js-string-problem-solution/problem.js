/* 
Problem-1
Count how many vowels are in a string (a, e, i, o, u)
👉 case insensitive
*/

function searchVowels (sentence){
    const lowerCaseSentence = sentence.toLowerCase();

    let count = 0;
    for(const letter of lowerCaseSentence){
        
        if(letter.includes("a") || letter.includes("e") || letter.includes("o") || letter.includes("i") || letter.includes("u")){
            count++;
        }
    }
    // console.log(count);
    return count;

}
// const sentence = "My Web Tech Lab Workbook is LIVE";
const sentence = "I love muslim brothers. They are very important for me.";
const result = searchVowels(sentence);
console.log(result);

/* 
Problem-2

Count how many consonants are in a string
👉 ignore spaces & numbers
 */

function isConsonants(sen){
    const lowerSen = sen.toLowerCase();
    const trimSen = lowerSen.trim();
    // console.log(trimSen);
    let count = 0;
    for(const letter of trimSen){
        if(letter.includes("a")||letter.includes("e")||letter.includes("i")||letter.includes("o")||letter.includes("u") || letter>=0 && letter<=9){
            continue;
        } else {
            count++;
        }
    }
    // console.log(count);
    return count;
}
const sen = " 12 A Capita lize only vowels in a string ";
const output = isConsonants(sen);
console.log(output);

/* 
Problem-3

Check whether a string is a palindrome
Example:
madam → true
Hello → false
*/

function isPalindrome (str){
    const trimStr = str.trim();
    const letterStr = trimStr.split("").reverse().join("");
    if(letterStr === trimStr){
        return true;

    }else{
        return false;
    }
}
const str = " madam";
// const str = "banana";
const output = isPalindrome(str);
console.log("Palindrome:",output);


/* 
Problem-4
Reverse a string without using built-in reverse function
*/

function doReverse(strng){
    let reverseString = '';
    for(let i = strng.length - 1; i>=0; i--){
        reverseString = reverseString + strng[i];
    }
    return reverseString;
}
const strng = "hello";
const result = doReverse(strng);
console.log(result);


/* 
Problem-5

Find the longest word in a given sentence
Example:
"I love programming in JavaScript"
Output → programming
*/

function isLongWord (input){
    const splitWordArray = input.split(" ");
    // console.log(splitWordArray);
    let longWord = '';
    for(const word of splitWordArray){
        if(word.length>longWord.length){
            longWord = word;
        }
    }
    // console.log(longWord);
    return longWord;
    
}
const input = "I love programming in JavaScript";
const result1 = isLongWord(input);
console.log(result1);
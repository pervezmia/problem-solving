// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function multiply (n1, n2, n3, n4){
    // console.log(n1,n2, n3, n4);
    const multi = n1*n2*n3*n4;
    // console.log(multi);
    return multi;
}
const output = multiply(2, 3, 4, 5);
// console.log("Four numbers multiplies is:", output);


// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function multiplyOrDivide(n){
    // console.log(n);
    if(n%2===1){
        const multiply = n*2;
        // console.log(multiply);
        return multiply;
    } else {
        const divided = n/2;
        // console.log(divided);
        return divided
    }
}

const result = multiplyOrDivide(11);
// console.log(result);


// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(para){
    let totalAge = 0;
    for(const p of para){
        // console.log(p);
        totalAge +=p;
    }
    // console.log(totalAge);
    const sizeOfAge = para.length;
    // console.log(sizeOfAge);
    const average = totalAge / sizeOfAge;
    // console.log(average);
    return average;
}
const ages = [32, 43, 55, 11, 80];
const avg = make_avg(ages)
// console.log("Average ages:", avg);



// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero (input){
    let count = 0;
    for(let i = 0; i<=input.length; i++){
        // console.log(input[i]);
        if(input[i]==="0"){
            count++
        }
    }
    // console.log(count);
    return count;
}
const binary = "001100101";
const totalZero = count_zero(binary);
// console.log("Total zero of this Binary String",binary, "is :" , totalZero);



// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even (number){
    // console.log(number);
    if(number%2===1){
        const o = "Odd";
        // console.log(o);
        return o;
    } else{
        const e = "Even";
        // console.log(e)
        return e;
    }

}
const oddEvenCheck = odd_even(3);
console.log("The number is:", oddEvenCheck);
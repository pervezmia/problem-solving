// task 1 
// Access the golden rod color value in output. 
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": "#daa520"
}
console.log(colors["golden rod"]);


// Task-2
// For this object below add a property named passenger capacity with value 5

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car ["passenger capacity"] = 5;
console.log(car);

// const key = Object.keys(car);
// console.log(key);

// Task-3
// Display the physics marks as output.

const studentd = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

console.log(studentd.physics.marks);

// Task-4
// Count the number of properties.

// Input:

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

const keys = Object.keys(student);

let count = 0;
for (const key of keys){
     count++;
}
console.log(count);


// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their types

// Input:

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

const key = Object.keys(myObject);
// console.log(key);
for(let i =0; i<key.length; i++){
    console.log("key:", key[i], "|", "type:",typeof myObject[key[i]]);
}

// Output:

// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean

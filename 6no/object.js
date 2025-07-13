// Check prototypes of Object
console.log(Object.getOwnPropertyNames(Object.prototype));

// Creating an object
let obj = { firstName: "John", lastName: "Doe", age: 25 };
console.log("Initial Object:", obj);

// Add data as a first element
obj.first = "First Property";
console.log("After adding first property:", obj);

// Add data as a last element
obj.last = "Last Property";
console.log("After adding last property:", obj);

// Remove first element
delete obj.first;
console.log("After removing first property:", obj);

// Remove last element
delete obj.last;
console.log("After removing last property:", obj);

// Add data in the middle
obj.middle = "Middle Property";
console.log("After adding middle property:", obj);

// Remove from the middle
delete obj.middle;
console.log("After removing middle property:", obj);

// Display data from object using for-loop
for (let key in obj) {
    console.log("For-loop Key-Value:", key, obj[key]);
}

// Display single element without loop
console.log("Single Property:", obj.firstName);

// Object de-structuring
let { firstName, lastName, age } = obj;
console.log("Destructured Values:", firstName, lastName, age);

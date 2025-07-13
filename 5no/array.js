// Different ways to create an array
let arr1 = [1, 2, 3, 4, 5]; // Using array literal
let arr2 = new Array(6, 7, 8, 9, 10); // Using Array constructor
let arr3 = Array.of(11, 12, 13, 14, 15); // Using Array.of
let arr4 = Array.from("hello"); // Using Array.from

// Checking prototype of Array
console.log("Prototype of Array:", Object.getPrototypeOf(arr1));

// Function to add element at the beginning of an array
function addFirst(arr, data) {
    arr.unshift(data);
    console.log("After adding at first position:", arr);
}

// Function to add element at the end of an array
function addLast(arr, data) {
    arr.push(data);
    console.log("After adding at last position:", arr);
}

// Function to remove first element from an array
function removeFirst(arr) {
    arr.shift();
    console.log("After removing first element:", arr);
}

// Function to remove last element from an array
function removeLast(arr) {
    arr.pop();
    console.log("After removing last element:", arr);
}

// Function to add element at any middle position
function addMiddle(arr, index, data) {
    if (index > 0 && index < arr.length) {
        arr.splice(index, 0, data);
        console.log(`After adding ${data} at index ${index}:`, arr);
    } else {
        console.log("Invalid index for middle insertion.");
    }
}

// Function to remove element from any middle position
function removeMiddle(arr, index) {
    if (index > 0 && index < arr.length) {
        arr.splice(index, 1);
        console.log(`After removing element at index ${index}:`, arr);
    } else {
        console.log("Invalid index for middle removal.");
    }
}

// Testing the functions
let testArray = [10, 20, 30, 40, 50];
console.log("Initial Array:", testArray);
addFirst(testArray, 5);
addLast(testArray, 60);
removeFirst(testArray);
removeLast(testArray);
addMiddle(testArray, 2, 25);
removeMiddle(testArray, 3);
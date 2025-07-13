// JavaScript program to find the largest and smallest element in an array

function findLargestAndSmallest(arr) {
    if (arr.length === 0) {
        console.log("Array is empty");
        return;
    }
    
    let smallest = arr[0];
    let largest = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    
    console.log("Smallest element:", smallest);
    console.log("Largest element:", largest);
}

// Example array with 10 elements
let numbers = [25, 12, 67, 89, 5, 33, 76, 98, 41, 55];
findLargestAndSmallest(numbers);

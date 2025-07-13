function findLargestSmallest(number) {
    let numStr = number.toString();
    let digits = numStr.split('').map(Number); // Convert each character to a number
    let largest = Math.max(...digits);         // Find the largest digit
    let smallest = Math.min(...digits);        // Find the smallest digit

    console.log("Largest digit:", largest);
    console.log("Smallest digit:", smallest);
}

// Input: 5-digit number
let num = prompt("Enter a 5-digit number:");

if (num.length === 5 && !isNaN(num)) {
    findLargestSmallest(num);
} else {
    console.log("Please enter a valid 5-digit number.");
}

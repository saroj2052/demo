// Function to add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Example usage
const num1 = 5;
const num2 = 3;
const result = addNumbers(num1, num2);

console.log(`${num1} + ${num2} = ${result}`);

// Export the function for use in other modules
module.exports = addNumbers;
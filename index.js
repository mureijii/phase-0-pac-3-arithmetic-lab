// Basic Math Functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Increment and Decrement
function increment(n) {
    return n + 1;
}

function decrement(n) {
    return n - 1;
}

// Parsing Integers and Floats
function makeInt(n) {
    return parseInt(n, 10); // Parses with base 10
}

function preserveDecimal(n) {
    return parseFloat(n); // Parses as a floating point number
}

// Run Tests (Optional)
console.log(add(2, 3)); // 5
console.log(subtract(10, 5)); // 5
console.log(multiply(4, 3)); // 12
console.log(divide(10, 2)); // 5
console.log(increment(7)); // 8
console.log(decrement(5)); // 4
console.log(makeInt("42")); // 42
console.log(makeInt("42px")); // 42
console.log(makeInt("hello")); // NaN
console.log(preserveDecimal("4.567")); // 4.567
console.log(preserveDecimal("hello")); // NaN

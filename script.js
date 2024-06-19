function first(array, n) {
    if (array.length === 0) {
        return [];
    }

    if (n == null) {
        return array[0];
    }

    if (n < 0) {
        return [];
    }

    return array.slice(0, n);
}

// Test Data
console.log(first([7, 9, 0, -2])); // Output: 7
console.log(first([], 3)); // Output: []
console.log(first([7, 9, 0, -2], 3)); // Output: [7, 9, 0]
console.log(first([7, 9, 0, -2], 6)); // Output: [7, 9, 0, -2]
console.log(first([7, 9, 0, -2], -3)); // Output: []

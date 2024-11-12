function getRandomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
} 
function generateCombination() { 
    const numbers = new Set(); while (numbers.size < 6) { 
            numbers.add(getRandomNumber(1, 49)); 
        } 
        return Array.from(numbers); 
    } 
for (let i = 0; i < 50; i++) { 
console.log(generateCombination().join(", ")); 
}
// arrow function


// 3 parameter in a arrow function and return their multiplied result.
const multiply = ( x, y, z ) => x * y * z;
const result = multiply(2,3,4);




// dufault value in arrow function
const add = ( x, y=0 ) => x + y;
const result2 = add(5);




// Find even spelling
const findEven = (friends) => {
    let evenSpells = [];
    for (friend of friends) {
        if ( friend.length%2 == 0 ) {
            evenSpells.push(friend);
        }
    }
    return evenSpells;
}

const friends = ['Anik', 'Ashik', 'Jihad', 'Shahjahan'];
const evenNames = findEven(friends);






// get all numbers squared value and get their average
const findAverage = (numbers) => {
    let total = 0;
    for ( number of numbers ) {
        let result = Math.pow(number, 2);
        total += result;
    }
    let average = total/numbers.length;
    return average;
}

const numbers = [2, 2, 2];
const average = findAverage(numbers);





// find the max value from two arrays
const findMaxFromTwo = (array1, array2) => {
    const array = [...array1, ...array2];
    return Math.max(...array);
}

const array1 = [2, 3, 4];
const array2 = [5, 6, 7];

const max = findMaxFromTwo(array1, array2); // max containing max value of these two parametes.
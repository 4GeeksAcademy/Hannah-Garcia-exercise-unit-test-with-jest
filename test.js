const { sum } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One Dollar should be 146.26 Yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');
    const dollars = fromDollarToYen(3.5);
    const expected = 3.5 * 146.26; 
    expect(fromDollarToYen(3.5)).toBe(511.92); 
})

test("One Yen should be 0.0055 Pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const dollars = fromYenToPound(3.5);
    const expected = 3.5 * 0.0055; 
    expect(fromYenToPound(3.5)).toBe(0.02);
})
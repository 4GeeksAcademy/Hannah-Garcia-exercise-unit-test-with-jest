const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInDollar to Yen
    let valueInEuro = valueInDollar / 1.07;
    let valueInYen = valueInEuro * 156.5;
    // return the dollar value
    return Math.round(valueInYen * 100) / 100;;
}

const fromYenToPound = function(valueInYen) {
    // Convert the given valueInDollar to Yen
    let valueInEuro = valueInYen / 156.5
    let valueInPound = valueInEuro * 0.87;
    // return the dollar value
    return Math.round(valueInPound * 100) / 100;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }
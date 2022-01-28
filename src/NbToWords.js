export function NbToWords(number) {

    const digitArray = number.toString().split(''); // 1 155 183
    const arraySize = Math.ceil(digitArray.length/3) ;
    let inWords = [];

    let splitByHundreds = []

    for (let i = 0; i < arraySize; i++) {
        if (digitArray.length <= 3) {
            splitByHundreds.push(digitArray)
        } else {
            let splice = digitArray.splice(digitArray.length-3,3)
            splitByHundreds.push(splice)
        }
    }

    const numbersValues = [
        ['', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize','dix-sept','dix-huit','dix-neuf'],
        ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'],
        ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'],
        ['cent','mille','million','milliard']
    ]

    for (let i of splitByHundreds) {
        let words = ''
        for (let j = 0; j < i.length; j++ ){

            if (i.length === 3 && i[j] !== '0'){
                if (j === 0) i[j] === '1' ? words += numbersValues[3][0] : words += (numbersValues[1][i[j]]) + ' ' + (numbersValues[3][0]);
                if (j === 1 && i[j+1] !== '0') i[j] === '1' ? words += ' ' + numbersValues[0][i[j+1]] : words += ' ' + (numbersValues[2][i[j]]);
                if (j === 1 && i[j+1] === '0') words += (numbersValues[2][1]);
                if (j === 2) i[j-1] !== '1' ? words += ' ' + numbersValues[1][i[j]] : '';
            }
            else if (i.length === 2 && i[j] !== '0') {
                if (j === 0) i[j] === '1' ? words += numbersValues[0][i[j+1]] : words += (numbersValues[2][i[j]]);
                if (j === 0 && i[j+1] === '0') words += (numbersValues[2][1]);
                if (j === 1) i[j-1] !== '1' ? words += ' ' + numbersValues[1][i[j]] : '';
            }
            else if (i.length === 1 && i[j] !== '0') i[j-1] !== '1' ? words += numbersValues[1][i[j]] : '';
        }
        inWords.push(words)
    }

    inWords.reverse()

    if (inWords.length>1) {
        let index = arraySize-1;
        for (let k = 1; k < arraySize+1; k = k+2) {
            inWords.splice(k,0,numbersValues[3][index])
            index--
        }
    }

    return inWords.join(' ')
}
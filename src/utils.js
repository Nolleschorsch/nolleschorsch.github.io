export const dezimalToBinary = (number) => {

    let digits = [];
    let n = number;

    while (true) {
        let r = n % 2;
        n = Math.floor(n / 2);
        digits.push(r);
        if (n === 0) break;
    }

    digits.reverse();

    return digits.join('');
}


export const binaryToDezimal = (binary) => {
    let dezi = 0;
    
    [...binary].reverse().forEach((digit, i) => {
        if (digit === "1") dezi += Math.pow(2, i);
    })

    return dezi;
}

export const addLeadingZeroes = (value, binarySize) => {
    let size = binarySize ? binarySize : 8;
    let digits = [...value];
    while (digits.length < size) {
        digits.unshift("0")
    }
    let binary = digits.join('');
    return binary;
}

export const booleanANDBinary = (a,b) => {

    let foo = [a,b].sort((i,j) => i.length > j.length ? 1 : -1);

    while (foo[0].length < foo[1].length) {
        foo[0] = "0" + foo[0];
    }

    let binary = "";

    [...foo[0]].forEach((digit, i) => {
        digit === "1" && foo[1][i] === "1" ? binary += "1" : binary += "0"
    })

    return binary
}

export const isValidNumber = (value) => {
    return [...value].every(item => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(item))
}

export const maxBinary = (value, valueB) => {

    console.log({value})
    let exponent = [...value].filter(a => a === "0").length

    return exponent === 0 ? valueB : Math.pow(2, exponent) - 1
}
export function multiply(a, b) {
    if(typeof a !== "number" || typeof b !== "number"){
        return "You must provide 2 numbers!"
    }
    if( a === 0 ||  b === 0){
        return "Numbers must be different than than 0"
    }
    return a * b;
}
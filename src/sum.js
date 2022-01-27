// Implement the sum function here
export function sum(a, b) {
    if(typeof a !== "number" || typeof b !== "number"){
        return "You must provide 2 numbers!"
    }
    return a + b;
}

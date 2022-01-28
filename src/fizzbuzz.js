export function fizzBuzz(n) {
    const toString = n.toString();

    if(typeof n !== "number") return "You must provide a numbers!";
    if (n < 0 || n > 100) return "Number must be between 0 and 100";
    if (n % 15 === 0) return "FizzBuzz";
    else if (n % 3 === 0 || toString.includes('3')) return "Fizz";
    else if (n % 5 === 0) return "Buzz";
    else return n;
}

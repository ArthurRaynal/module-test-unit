import {multiply} from "../src/multiply";

describe("The multiply function", function(){

    it("should receive two numbers as arguments", function(){
        expect(multiply("a", true)).toBe("You must provide 2 numbers!")
    })

    it("should receive two numbers different than 0", function(){
        expect(multiply(0, 4)).toBe("Numbers must be different than than 0")
    })

    it("should return a number", function() {
        expect(typeof multiply(1, 2)).toBe("number")
        expect(typeof multiply(5, 40)).toBe("number")
    })

    test('adds 1 + 2 to equal 3', function() {
        expect(multiply(1, 2)).toBe(2)
    })

})
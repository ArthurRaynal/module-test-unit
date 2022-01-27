// Add the unit tests of the sum function here
import {sum} from "../src/sum";

describe("The sum function", function(){

  it("should receive two numbers as arguments", function(){
    expect(sum("a", "test")).toBe("You must provide 2 numbers!")
  })

  test('adds 1 + 2 to equal 3', function() {
    expect(sum(1, 2)).toBe(3)
  })

})
import {fizzBuzz} from "../src/fizzbuzz";

describe("The FizzBuzz function", function(){

  it("should receive a number as argument", function(){
    expect(fizzBuzz('n')).toBe("You must provide a numbers!");
    expect(fizzBuzz(true)).toBe("You must provide a numbers!");
  })

  it("should be a number between 0 and 100", function(){
    expect(fizzBuzz(150)).toBe("Number must be between 0 and 100");
    expect(fizzBuzz(-1)).toBe("Number must be between 0 and 100");
    expect(fizzBuzz(101)).toBe("Number must be between 0 and 100");
  })

  test('Contains 3 in it', function() {
    expect(fizzBuzz(13)).toBe('Fizz');
    expect(fizzBuzz(63)).toBe('Fizz');
    expect(fizzBuzz(93)).toBe('Fizz');
  })

  test('Is a multiple of 3', function() {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(6)).toBe('Fizz');
    expect(fizzBuzz(66)).toBe('Fizz');
    expect(fizzBuzz(99)).toBe('Fizz');
  })

  test('Is a multiple of 5', function() {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(50)).toBe('Buzz');
    expect(fizzBuzz(65)).toBe('Buzz');
    expect(fizzBuzz(95)).toBe('Buzz');
  })

  test('Is a multiple of 3 and 5', function() {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
    expect(fizzBuzz(60)).toBe('FizzBuzz');
    expect(fizzBuzz(90)).toBe('FizzBuzz');
  })

  test('Just return the number', function() {
    expect(fizzBuzz(1)).toBe(1);
    expect(fizzBuzz(77)).toBe(77);
    expect(fizzBuzz(44)).toBe(44);
  })

})
import { FizzBuzz } from "../src/main";

describe("FizzBuzz", () => {
  it('should return "Fizz" when multiple of 3', () => {
    expect(FizzBuzz(3)).toBe("Fizz");
    expect(FizzBuzz(6)).toBe("Fizz");
  });

  it('should return "Buzz" when multiple of 5', () => {
    expect(FizzBuzz(5)).toBe("Buzz");
    expect(FizzBuzz(10)).toBe("Buzz");
  });

  it('should return "FizzBuzz" when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).toBe("FizzBuzz");
    expect(FizzBuzz(45)).toBe("FizzBuzz");
  });

  it('should return the number when non-multiple', () => {
    expect(FizzBuzz(8)).toBe(8);
    expect(FizzBuzz(13)).toBe(13);
  });
});

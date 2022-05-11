export const FizzBuzz = (number) => {
  const multipleOfThree = number % 3 === 0
  const multipleOfFive = number % 5 === 0

  if (multipleOfThree && multipleOfFive) return "FizzBuzz"
  if (multipleOfThree) return "Fizz";
  if (multipleOfFive) return "Buzz";

  return number
};

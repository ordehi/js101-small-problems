for (let counter = 1; counter <= 99; counter += 2) {
  console.log(counter);
}

// Further Exploration
// Use a different technique
// Allow users to specify the limits for the odd numbers logged to the console

const logOddNumbers = (min = 1, max = 99) => {
  // Handle case when min is greater than max
  if (min > max) {
    throw new RangeError('Argument 1 (min) must be less than argument 2 (max)');
  }

  // Handle case when the difference between min and max is greater than 1000. "Performance reasons".
  if (max - min > 1000) {
    throw new RangeError(
      'The difference between min and max must not be greater than 1000'
    );
  }

  // Handle case when min is even to avoid prevent the loop from logging even numbers
  if (min % 2 === 0) {
    min += 1;
  }

  let counter = min;
  while (counter <= max) {
    console.log(counter);
    counter += 2;
  }
};

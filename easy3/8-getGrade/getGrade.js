const computeAverage = (...args) =>
  Math.floor(args.reduce((acc, curr) => acc + curr) / args.length);

const getGrade = (...scores) => {
  let score = computeAverage(...scores);
  let grade = '';

  if (score < 60) {
    grade = 'F';
  } else if (score < 70) {
    grade = 'D';
  } else if (score < 80) {
    grade = 'C';
  } else if (score < 90) {
    grade = 'B';
  } else {
    grade = 'A';
  }

  return grade;
};

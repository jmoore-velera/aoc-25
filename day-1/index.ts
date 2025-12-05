import fs from 'fs/promises';

const sampleInput = await fs.readFile(
  `${import.meta.dirname}/sample-input.txt`,
  "utf8"
);
const input = await fs.readFile(`${import.meta.dirname}/input.txt`, "utf8");
const rotations = input.split("\n");

const START = 50;
const TOTAL = 100;

function partOne() {
  let password = 0;
  let current = START;

  rotations.forEach((rotation) => {
    const dir = rotation[0];
    let value = Number(rotation.slice(1));

    if (dir === "L") {
      value *= -1; // make negative
    }

    let change = current + value;
    while (change < 0) {
      change = change + TOTAL;
    }

    current = change % TOTAL;

    if (current === 0) {
      password += 1;
    }
  });
  return password;
}

console.log(partOne());

function modulus(value: number, divisor: number) {
  // -250 - (-100) * (floor(-250/-100 = 2.5) = 2)
  return value - divisor * Math.floor(value / divisor);
}

function partTwo() {
  let toZero = 0;
  let dialPos = START;

  rotations.forEach((rotation) => {
    const dir = rotation[0];
    let value = Number(rotation.slice(1));

    if (dir === "L") {
      value *= -1;

      const divisions = Math.floor(value / (TOTAL * -1)); // gets us the number of times we've passed 0
      toZero += divisions;

      const mod = modulus(value, TOTAL * -1);
      if (dialPos !== 0 && dialPos + mod <= 0) {
        toZero += 1;
      }
    } else {
      const divisions = Math.floor(value / TOTAL);
      toZero += divisions;

      const mod = modulus(value, TOTAL);
      if (dialPos + mod >= 100) {
        toZero += 1;
      }
    }

    dialPos = modulus(dialPos + value, TOTAL);
  });
  return toZero;
}

console.log(partTwo());

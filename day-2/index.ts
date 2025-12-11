import fs from "fs/promises";

const input = await fs.readFile(`${import.meta.dirname}/input.txt`, "utf8");

const ranges = input.split(",");

function dayOne() {
  const invalid: number[] = [];

  ranges.forEach((r) => {
    const range = r.split("-");

    const lower = Number(range[0]);
    const upper = Number(range[1]);

    for (let digit = lower; digit <= upper; digit++) {}
  });

  const sum = invalid.reduce((prev, current) => (current += prev));
  return sum;
}

function isInvalidId(digit: number) {
  const str = digit.toString();

  return /^(\d+)\1+$/.test(str);
}

function dayTwo() {
  const invalid: number[] = [];

  ranges.forEach((r) => {
    const range = r.split("-");

    const lower = Number(range[0]);
    const upper = Number(range[1]);

    for (let digit = lower; digit <= upper; digit++) {
      if (isInvalidId(digit)) invalid.push(digit);
    }
  });

  return invalid.reduce((prev, current) => (current += prev));
}

// console.log(dayOne());
console.log(dayTwo());

const input = fs.readFileSync(`${__dirname}/input.txt`, "utf8");
const formatted = input.split("\n");

// this function takes in the starting dial position and returns the amount
// of times the dial hits zero

// the second part of the problem changes my thought process. now we care about the dial going past zero or hitting zero
function timesToZero(dialStart) {
  let dialPos = dialStart;
  let toZero = 0;

  formatted.forEach((input) => {
    const arr = input.split("");
    const withoutDirection = arr.toSpliced(0, 1);

    const direction = arr[0];
    const value = Number(withoutDirection.join("")); // array to number

    direction == "R" ? (dialPos += value) : (dialPos -= value); // if we go right we add, left subtract

    const remainder = dialPos % 100;
    let timesPast = 0;

    if (dialPos < 0) {
      timesPast +=
        dialPos > -99
          ? Math.abs(Math.floor(dialPos / 100))
          : Math.abs(Math.ceil(dialPos / 100));
      dialPos = remainder + 100;
    }

    if (dialPos > 99) {
      timesPast += Math.abs(Math.floor(dialPos / 100));
      dialPos = remainder;
    }

    toZero += timesPast;
  });

  return toZero;
}

const dialStart = 50;
const pointedToZero = timesToZero(dialStart);

console.log(pointedToZero);

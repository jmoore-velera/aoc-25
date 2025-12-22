import fs from 'fs/promises';

const input = await fs.readFile(
  `${import.meta.dirname}/sample-input.txt`,
  "utf8"
);

const banks = input.split("\n");

function dayOne() {
  let total = 0;

  banks.forEach((bank) => {
    let first = 0;
    let second = 0;

    const length = bank.length;

    const avail = bank.split("");
    const woLast = avail.toSpliced(length - 1);

    // first
    woLast.forEach((digitStr, i) => {
      const digit = Number(digitStr);

      if (digit > first) {
        first = digit;
      }
      const firstI = woLast.indexOf(first.toString());

      // when we look for the second battery we need to get rid of all batteries in that come before the one we've selected
      if (i === woLast.length - 1) avail.splice(0, firstI + 1);
    });

    // we are going to iterate twice once for each battery
    avail.forEach((digitStr) => {
      const digit = Number(digitStr);

      if (digit > second) second = digit;
    });

    total += Number(`${first}${second}`);
  });

  return total;
}

function dayTwo() {
  let total = 0;

  const NEEDED = 12;

  banks.forEach((bank) => {
    const length = bank.length; // 15

    const batteries = bank.split("");

    let chosen_batteries: number[] = []; // 1

    for (let i = 0; i < NEEDED; i++) {
      const remaining_needed = NEEDED - chosen_batteries.length; // 11
      const iAvail = length - remaining_needed; // 4; indices: 0, 1, 2, 3
      const availBatt = batteries.toSpliced(iAvail + 1);

      console.log(iAvail);

      let highest = 0;
      availBatt.forEach((b) => {
        const toNum = Number(b);
        if (toNum > highest) highest = toNum;
      });

      chosen_batteries[i] = highest;
    }

    console.log(chosen_batteries);

    // total += chosen_batteries.reduce(batt => )
  });

  return total;
}

console.log(dayTwo());

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce(
  (acc, cur, i, ar) =>
    //   console.log(`Itration ${i}: ${acc}`);
    acc + cur,
  0
);

console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

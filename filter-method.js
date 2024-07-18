var num = [1, 2, 3, 4, 5, 6, 8, 9, 10];
var res = num.filter((currentValue, index, arr) => {
  return currentValue > 4;
});

console.log(res);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposit = movements.filter((mov, i, arr) => {
  return mov > 0;
});

console.log(movements);
console.log(deposit);

const depositFor = [];
for (const mov of movements) if (mov > 0) depositFor.push(mov);
console.log(depositFor);

const withdrawals = movements.filter((mov) => {
  return mov < 0;
});

console.log(withdrawals);

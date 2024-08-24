const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const myArr = [1, 2, [3, [4, 5, 6], 7], 8];
const newArr = myArr.flat(1); //[1,2,3,[4,5,6],7,8]
console.log(newArr);
let fuck = [1, 2, [3, [4, 5, 6], 7], 8];
fuck[3]; // output: 8
console.log(fuck[2][0]); // output: 3
console.log(fuck[2][1][1]);

/*
let rand = Math.floor(Math.random() * 10 + 1);
let right = 5;
let count = 0;
let number;
while (0 < right) {
  right--;
  count++;
  number = prompt("Enter a number");

  if (number < rand) {
    console.log("up");
  } else if (number > rand) {
    console.log("down");
  } else {
    console.log(`Congratulate! You find in ${count} steps`);
    console.log(`Your score: ${100 - (count - 1) * 20}`);
    break;
  }
  if (right == 0) {
    console.log("Finish your right");
    break;
  }
}
console.log(`The number is ${rand}`);
*/
/* Task-03 */

// Subtask-1
let i = 81;
let sum = 0;
while (i <= 131) {
    if (i % 2 === 1) {
        sum += i;
    }
    i++;
}
console.log("Sum of the odd numbers:",sum);

// Subtask-2
let n = 206;
let sum2 = 0;
while (n <= 311) {
    if (n % 2 === 0) {
        console.log(n)
        sum2 += n;
    }
    n++;
}
console.log("Sum of the even numbers:", sum2);
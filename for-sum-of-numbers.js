/* Task-03 */

// Subtask-1
let sum = 0;
for (let i = 91; i <= 129; i++) {
    if (i % 2 === 1) {
        sum += i;
    }
}
console.log('sum of the odd numbers:', sum);

// Subtask-2
let sum2 = 0;
for (let i = 51; i <= 85; i++) {
    if (i % 2 === 0) {
        sum2 += i;
    }
}
console.log('sum of the even numbers:', sum2);
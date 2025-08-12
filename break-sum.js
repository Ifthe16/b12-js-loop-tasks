/* Task-02 */

// while loop
let i = 1;
let sum = 0;
while (true) {
    sum += i;
    console.log(sum);
    if (sum >= 100) {
        break;
    }
    i++;
}

// for loop
let sum2 = 0;
for (let i = 1; true; i++) {
    if (sum2 >= 100) {
        break;
    }
    sum2 += i;
    console.log(sum2);
}
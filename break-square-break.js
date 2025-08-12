/* Task-03 */

// while loop
let i = 1;
while (i <= 100) {
    if (Number.isInteger(Math.sqrt(i))) {
        console.log("First square number:", i);
        break;
    }
    i++;
}

// for loop
for (let i = 1; i <= 100; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
        console.log("First square number:", i);
        break;
    }
}

/* Task-01 */

// while loop
let i = 1;
while (i <= 40) {
    i++;
    if (i % 2 === 1) {
        continue;
    }
    console.log(i);
}

// for loop
for (let i = 1; i <= 40; i++) {
    if (i % 2 === 1) {
        continue;
    }
    console.log(i);
} 
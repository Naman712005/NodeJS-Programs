const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter an integer: ', (input) => {
    const number = parseInt(input, 10);

    if (!isNaN(number)) {
        console.log(`You entered: ${number}`);
    } else {
        console.log('Invalid input. Please enter a valid integer.');
    }

    rl.close();
});
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter username: ', (username) => {
  rl.question('Enter password: ', (password) => {
    const UserPattern = /^[a-zA-Z]+$/;
    const PasswordPattern = /^[0-9]+$/;

    if (username.match(UserPattern) && password.match(PasswordPattern)) {
      console.log("Valid username and password");
    } else {
      console.log("Invalid username or password");
    }

    rl.close();
  });
});

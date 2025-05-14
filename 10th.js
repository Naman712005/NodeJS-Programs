const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter email: ', (Useremail) => {
    const email =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (Useremail.match(email)) {
      console.log("Valid email address");
    } else {
      console.log("Invalid email address");
    }
    rl.close();
  });


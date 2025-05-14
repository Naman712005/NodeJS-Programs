const ns = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = ns(hideBin(process.argv))
  .option('name', {
    alias: 'n',
    type: 'string',
    description: 'Your name',
    demandOption: true
  })
  .help()
  .argv;

console.log(argv.name);

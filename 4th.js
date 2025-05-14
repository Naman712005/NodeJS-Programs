const prompt = require('prompt');
prompt.get(['name'], function (err, result) {
    console.log('  name: ' + result.name);
});

let fs              = require('fs');
let async           = require('async');
let colors          = require('colors');
let prompt          = require('prompt');
let asciify         = require('asciify');
let argv            = require('yargs').argv;
let githubScrapper  = require('./Github');

let Github = new githubScrapper();

asciify('GitContribs', {font: 'colossal', color: 'magenta'}, function (err, res) {
    if (err) return;
    console.log(res + '\r\n(Press ctrl+c OR enter to exit)');
    run();
});

function run () {
    prompt.start();
    prompt.message = colors.rainbow('Enter ') + colors.bgMagenta.white('GITHUB');
    prompt.get(['username'], function (err, result) {
        Github.getContribs(result.username, (response) => {
            console.log('length', response.length);
            console.log('first', response[0]);
        });
    });
}
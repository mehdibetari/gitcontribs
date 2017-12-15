let fs              = require('fs');
let async           = require('async');
let colors          = require('colors');
let prompt          = require('prompt');
let asciify         = require('asciify');
let argv            = require('yargs').argv;
let githubScrapper  = require('./Github');
let gitlabProvider  = require('./Gitlab');

let Github = new githubScrapper();
let Gitlab = new gitlabProvider();

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

            prompt.message = colors.rainbow('Enter ') + colors.bgMagenta.white('GITLAB');
            prompt.get(['username'], function (err, result) {
                Gitlab.getContribs(result.username, (results) => {
                    console.log(mergeContribs(results, response));
                    console.log('first',results);
                    console.log('second',response);
                });
            });
        });
    });
}

function mergeContribs (first, second) {
    let contribs = Object.assign({}, first, second);
    Object.keys(contribs).map((count, date) => {
        contribs.date += first.date || 0;
    });
    return contribs;
}
let fs              = require('fs');
let async           = require('async');
let argv            = require('yargs').argv;
let colors          = require('colors');
let prompt          = require('prompt');
let asciify         = require('asciify');
let GithubScrapper  = require('./Github');
let GitlabProvider  = require('./Gitlab');

let Github = new GithubScrapper();
let Gitlab = new GitlabProvider();

class GitContribs {
    initCliScreen () {
        asciify('GitContribs', {font: 'colossal', color: 'magenta'}, (err, res) => {
            if (err) return;
            console.log(res + '\r\n(Press ctrl+c OR enter to exit)');
            this.run();
        });
    }

    run () {
        prompt.start();
        prompt.message = colors.rainbow('Enter ') + colors.bgMagenta.white('GITHUB');
        prompt.get(['username'], (err, result) => {
            if (err) return;
            Github.getContribs(result.username, (response) => {
                prompt.message = colors.rainbow('Enter ') + colors.bgMagenta.white('GITLAB');
                prompt.get(['username'], (err, result) => {
                    if (err) return;
                    Gitlab.getContribs(result.username, (results) => {
                        console.log(this.mergeContribs(results, response));
                        console.log('first', results);
                        console.log('second', response);
                    });
                });
            });
        });
    }

    mergeContribs (first, second) {
        let contribs = Object.assign({}, first, second);
        Object.keys(contribs).map((count, date) => {
            contribs.date += first.date || 0;
        });
        return contribs;
    }
}

module.exports = GitContribs;

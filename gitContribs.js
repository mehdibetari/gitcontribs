let fs              = require('fs');
let async           = require('async');
let _               = require('underscore');
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
                        let allContribss = this.mergeContribs(results, response);
                        console.log('Github contrib:', this.sumOfContribs(response));
                        console.log('Gitlab contrib:', this.sumOfContribs(results));
                        console.log('All contrib:', this.sumOfContribs(allContribss));
                    });
                });
            });
        });
    }
    sumOfContribs (contribs) {
        return Object.keys(contribs).reduce((previous, current) => previous + contribs[current], 0);
    }

    mergeContribs (first, second) {
        let contribs = {};
        let dates = _.uniq(Object.keys(first).concat(Object.keys(second)));
        dates.forEach((date) => {
            contribs[date] = (first[date] || 0) + (second[date] || 0);
        });
        return contribs;
    }
}

module.exports = GitContribs;
//dzaporozhets
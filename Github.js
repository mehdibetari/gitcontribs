'use strict';

let request = require('request');
let cheerio = require('cheerio');

class Github {
    constructor () {
        this.GITHUB_BASE_URL = 'https://github.com/';
    }

    getContribs (userName, callback) {
        request(this.GITHUB_BASE_URL + userName, (error, response, html) => {
            if (error) return callback([]);
            const $ = cheerio.load(html);
            let contribs = [];
            $('rect.day').each(function (i, elem) {
                let contrib = $(this).data();
                if (contrib.count > 0) {
                    contribs.push(contrib);
                }
            });
            callback(this.formatContribs(contribs));
        });
    }

    formatContribs (contribs) {
        let formatedContribs = {};
        contribs.map((contrib) => {
            formatedContribs[contrib.date] = contrib.count;
        });
        return formatedContribs;
    }
}
module.exports = Github;

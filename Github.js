"use strict";
let request = require('request');
let cheerio = require('cheerio');

class Github {

    constructor() {
        this.GITHUB_BASE_URL = 'https://github.com/';
    }

    getContribs(userName, callback) {
        callback(userName);
        request(this.GITHUB_BASE_URL+userName, function(error, response, html){
            if (error) callback([]);
            const $ = cheerio.load(html);
            let contribs = [];
            $('rect').each((i) => {
                let contrib = {};
                contrib.count = $(this).attr('count');
                contrib.date = $(this).attr('date');
                contribs.push(contrib);
            });
            callback(contribs);
        });
    }
}
module.exports =  Github;
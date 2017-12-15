"use strict";
let request = require('request');

class Gitlab {

    constructor() {
        this.GITLAB_BASE_URL = 'https://gitlab.com/users/';
        this.GITLAB_END_URL = '/calendar.json'
    }

    getContribs(userName, callback) {
        request(this.GITLAB_BASE_URL+userName+this.GITLAB_END_URL, function(error, response, html){
            if (error) return callback([]);
            callback(JSON.parse(response.body));
        });
    }
}
module.exports =  Gitlab;
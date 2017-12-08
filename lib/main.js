'use strict';

// Requirements
const rp = require('request-promise-native');

// Main module
module.exports = function(configs) {

  // Store configurations
  this.configs = configs;

  // Query building
  this.build_query = function(method, endpoint, sqltext) {
    const thesql = sqltext.replace(/'/g, '\u0027');
    // Set up API call parameters
    const options = {
      method: method,
      uri: `${this.configs.url}/${endpoint}.json`,
      body: {
        queryType: "SQL",
        // Needs to use unicode \u0027 for the single quotation mark
        query: thesql
      },
      json: true // Automatically stringifies the body to JSON
    };
    return options;
  }

  // APIs methods
  this.query = function(query) {
    // Set up API call parameters
    const opts = this.build_query('POST', 'query', query);
    // Return API call
    return rp(opts);
  }

};

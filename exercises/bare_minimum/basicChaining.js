/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var rp = require('request-promise');

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  fs.readFileAsync(readFilePath)
    .then(function(fileData) {
      return fileData[0];
    })
    .then(function(user) {
      rp('www.github.com')
        .then(function (infoOnUser) {
          return infoOnUser.profile;
        })
    })
    .then(function (profileInfo) {
      
    })
  // TODO
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};

// Problem: We need a simple way to look at a user's badge count and JS points
// Solution: Use Node.js to connect to Treehouse's API to get profile information
// to print out

var http = require('http');

var username = 'etmoore';

function printMessage(username, badgeCount, points){
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " JavaScript points.";
  console.log(message);
}

// Connect  to the API URL (http://teamtreehouse.com/username.json)

var req = http.get('http://teamtreehouse.com/' + username + '.json', function(res){
  console.log(res.statusCode);
  // Read the data
  // Parse the data
  // Print the data

});

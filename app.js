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
  var body = "";
  // Read the data
  res.on('data', function(chunk){
    body += chunk;
  });
  res.on('end', function () {
    console.log(body);
  });
  // Parse the data
  // Print the data
});

req.on('error', function(e){
  console.error(e.message);
});

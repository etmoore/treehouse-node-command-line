// Problem: We need a simple way to look at a user's badge count and JS points
// Solution: Use Node.js to connect to Treehouse's API to get profile information
// to print out

var http = require('http');

// Print out messages
function printMessage(username, badgeCount, points){
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " JavaScript points.";
  console.log(message);
}

// Print out error messages
function printError(e){
  console.log(e.message);
}

function get(username){
  // Connect  to the API URL (http://teamtreehouse.com/username.json)
  var req = http.get('http://teamtreehouse.com/' + username + '.json', function(res){
    var body = "";
    // Read the data
    res.on('data', function(chunk){
      body += chunk;
    });
    res.on('end', function () {
      if (res.statusCode === 200){
        try {
          // Parse the data
          var profile = JSON.parse(body);
          // Print the data
          printMessage(username, profile.badges.length, profile.points.JavaScript);
        } catch(error) {
          // Parse Error
          printError(error);
        }
      } else {
        // Status Code Error
        printError({message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[res.statusCode] + ")"});
      }
    });


  });

  // Connection Error
  req.on('error', printError);
}

module.exports.get = get;

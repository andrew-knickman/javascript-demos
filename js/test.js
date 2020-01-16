var request = require('request');
request('https://www.billboard.com/charts/rap-song', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body); // Print the google web page.
  }
});
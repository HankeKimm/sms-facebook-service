var express = require('express');
var https = require('https');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});

app.get('/auth/handler', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('handler');
});

app.get('/user', function(req, res) {
  console.log(req.query.token);
  //res.send("Hello");
  /*https.post("https://graph.facebook.com" +
    "/v2.8/oauth/access_token?" +
    "grant_type=fb_exchange_token&" +
    "client_id={client_id}&" +
    "client_secret=" + "{client_secret}" + "&" +
    "fb_exchange_token=" + req.query.token,
    function(res) {
      //console.log(JSON.stringify(res));
        res.on('data', function(body) {
          console.log(JSON.stringify(body));
        });
    });*/
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

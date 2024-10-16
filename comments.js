// create a web server

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  var myReadStream = fs.createReadStream(__dirname + '/comments.html', 'utf8');
  myReadStream.pipe(res);
});


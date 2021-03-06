var express = require('express');
var app = express();

const PORT = 80;

// static
app.use('*style.css', function(req, res, next) {
	req.url += '.gz';
	res.set('Content-Encoding', 'gzip');
	res.set('Content-Type', 'text/css');
	next();
});
app.use('/assets', express.static('assets'));
app.use('/views', express.static('views'));

// GET requests
app.get('/', function(req, res) {
	res.set('Content-Encoding', 'gzip');
	res.set('Content-Type', 'text/html');
	res.sendFile(__dirname + '/index.html.gz');
});
app.get('/project-2048.html', function(req, res) {
	res.sendFile(__dirname + '/project-2048.html');
});
app.get('/project-mobile.html', function(req, res) {
	res.sendFile(__dirname + '/project-mobile.html');
});
app.get('/project-webperf.html', function(req, res) {
	res.sendFile(__dirname + '/project-webperf.html');
});
app.get('/views/pizza.html', function(req, res) {
	res.sendFile(__dirname + '/views/pizza.html');
});


app.listen(PORT);

var latte = require('latte');

var app = latte.app();

app.route('/', function(req, res){
res.writeHead(200, {"Content-Type": 'text/html'});
res.end("Hello World");
});
app.start(process.env.PORT);
#!/usr/bin/env node

var http = require('http');
var url = require("url");

var latte = function(){};

var handle = {};
latte.prototype.route = function(path, callback){
handle[path] = callback;
};

latte.prototype.start = function(port){
http.createServer(function(req, res){
var path = url.parse(req.url).pathname
console.log(req.method+" request for "+path+" recieved.")
try {
handle[path](req, res)
}
catch (e){
    try {
        handle['404'](req, res)
    }
    catch(e){
        res.writeHead(200, {"Content-Type": 'text/html'})
        res.end("404. Not Found")
        console.log("404 not found for "+path)
    }
    console.log("404 error for "+path)
}
}).listen(port);
console.log("Server Started at port "+port)
}; 

latte.app = function(){
return latte.prototype
}

exports.app = latte.app
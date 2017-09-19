var express = require('express');
var app = express();

app.use(express.static(__dirname +'/public'));
app.listen('1234');
console.log('running on port 1234');
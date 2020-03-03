var express = require('express');
var app = express();

app.get('/', function(req, res){
  console.log('-------访问了helloworld---',req.headers)
  res.send('hello world');
});
app.get('/hello', function(req, res){
  res.send('hello world123');
});

app.get('/user', function(req, res){
  res.send('my username is tom!');
});

console.log('the app is listenning on 3000!')
app.listen(3000);
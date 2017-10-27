var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = 5000;


var ticket = 'I\'ve been seen in real time :)'
var newTicket = false
app.use(express.static(path.join(__dirname, 'public')));

app.post('/',function(req,res){
 io.emit('ticket',ticket)
 res.send('cheers')
})



io.on('connection', function (socket) {
    socket.emit('introduction', 'hello world');
   
  });



server.listen(port, function () {
    console.log('Server listening at port 5000');
  });
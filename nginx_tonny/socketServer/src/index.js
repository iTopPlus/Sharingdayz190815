var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var redis = require('socket.io-redis');
io.adapter(redis({ host: '10.0.75.2', port: 6399 }));

var fs = require('fs');
var os = require('os');

app.listen(80);

function handler (req, res) {  
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    console.log("HOST:Request:",os.hostname())
    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function (socket) {
  socket.emit('news', { message: 'Register New Client :' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
});
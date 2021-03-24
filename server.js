const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
 
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('info',(msg)=>{
        socket.broadcast.emit('info',msg)
    })


  });

http.listen(3000, () => {
  console.log('listening on *:3000');
});
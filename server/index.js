let io = require('socket.io')({
    transports: ['websocket'],
});

io.attach(8000);

io.on('connection', (client) => {
    console.log("new client");
    client.on('test', (data) => {
        console.log(data);
        client.emit("chat","Message received");
    });
});

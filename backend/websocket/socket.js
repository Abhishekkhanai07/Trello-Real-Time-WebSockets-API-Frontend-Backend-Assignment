const { Server } = require('socket.io');

let io;

function setupSocket(server) {
  io = new Server(server, {
    cors: { origin: "*" , methods: ["GET","POST"] }
  });

  io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);
    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });
  });
}

function broadcast(eventName, data) {
  if (io) io.emit(eventName, data);
}

module.exports = { setupSocket, broadcast };

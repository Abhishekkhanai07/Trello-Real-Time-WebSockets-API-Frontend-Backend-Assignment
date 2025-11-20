const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const server = http.createServer(app);

const { setupSocket } = require('./websocket/socket');
setupSocket(server);

app.use(cors());
app.use(bodyParser.json());

const boardRoutes = require('./routes/boardRoutes');
const taskRoutes = require('./routes/taskRoutes');

app.use('/api/boards', boardRoutes);
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'db.json')));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

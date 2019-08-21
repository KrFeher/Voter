const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 5000;
const morgan = require('morgan');
const cors = require('cors');

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

server.listen(port, () => console.log(`Listening to port ${port}...`));

io.on('connection', socket => {
  socket.emit('initialise', 'Socket connection established');
})

app.get('/test/', (req, res) => {
  res.send("Success");
});

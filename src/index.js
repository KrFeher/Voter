const express = require('express');
const app = express();
const port = 3001;
const morgan = require('morgan');
const cors = require('cors');

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

app.get('/test/', (req, res) => {
  res.send("Success");
});

app.listen(port, () => console.log(`Listening to port ${port}...`));
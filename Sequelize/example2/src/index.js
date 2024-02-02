const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('enviado');
})

app.listen(PORT, () => console.log(`Listen on port ${PORT}`));
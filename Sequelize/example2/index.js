const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  console.log(req);
  console.log(res);
  res.status(200).send('ok');
})

app.listen(3000, () => console.log('listen on 3000'));
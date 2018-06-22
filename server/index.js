require('dotenv').load();
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

const port = 3000;

app.listen(process.env.PORT || port, () => {
  console.log(`listening on port ${process.env.PORT || port}`);
});
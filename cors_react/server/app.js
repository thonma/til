var express = require('express');
// var cors = require('cors');
var app = express();

// app.use(cors());

app.get('/products/:id', function (req, res, next) {
  console.log(req.headers.host);
  res.json({ msg: 'xxx' });
})

app.listen(8000, function () {
  console.log('Started server');
})
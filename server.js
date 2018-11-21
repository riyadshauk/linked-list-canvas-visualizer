const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(process.env.PORT || 3000);
const express = require('express');
const database = require('../database/index.js')
const app = express();
var bodyParser = require('body-parser')
const github = require('../helpers/github.js')

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.text());


app.post('/repos', function (req, res) {
  github.getReposByUsername(req.body, (err, results) => {
    if (err){
      console.log(err);
    } else {
      for (var i = 0; i < results.length; i++){
        database.save(results[i]);
      }
    }
  });
});

app.get('/repos', function (req, res) {
  database.fetch((err, results) => {
    if (err){
      console.log(err);
    } else {
      console.log('here in server')
      res.send(results);
    }
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


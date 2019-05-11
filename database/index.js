const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = new mongoose.Schema({
  id: Number,
  login: String, //inside owner object
  avatar_url: String, //inside owner object
  url: String,
  forks_count: Number,
  watches: Number,
  open_issues: Number
});

let Repo = mongoose.model('Repo', repoSchema);

var save = repo => {
  var doc = new Repo({
    id: repo.id,
    login: repo.owner.login, //inside owner object
    avatar_url: repo.owner.avatar_url, //inside owner object
    url: repo.owner.url, //inside owner object
    forks_count: repo.forks_count,
    watches: repo.watchers,
    open_issues: repo.open_issues_count
  });
  doc.save();
}

var fetch = callback => {
  //how to go inside the mongo database and return values
    //highest forks
  Repo.find()
    .then((data) => {
      callback(null, data);
    })
}

//find (fetch) method to grab from the mongoose database

module.exports.save = save;
module.exports.fetch = fetch;
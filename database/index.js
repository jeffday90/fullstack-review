const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = new mongoose.Schema({
  id: Number,
  name: String,
  repo_url: String,
  login: String, //inside owner object
  avatar_url: String, //inside owner object
  user_url: String,
  forks_count: Number,
  watches: Number,
  open_issues: Number
});

let Repo = mongoose.model('Repo', repoSchema);

var save = repo => {
  var doc = new Repo({
    id: repo.id,
    name: repo.name,
    repo_url: repo.clone_url,
    login: repo.owner.login, //inside owner object
    avatar_url: repo.owner.avatar_url, //inside owner object
    user_url: repo.owner.url, //inside owner object
    forks_count: repo.forks_count,
    watches: repo.watchers,
    open_issues: repo.open_issues_count
  });
  doc.save();
}

var fetch = callback => {
  //how to go inside the mongo database and return values
    //highest forks
  Repo.find().sort({forks_count: - 1}).limit(25)
    .then((data) => {
      callback(null, data);
    })
}

//find (fetch) method to grab from the mongoose database

module.exports.save = save;
module.exports.fetch = fetch;
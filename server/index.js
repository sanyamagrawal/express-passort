const express  = require('express');
const passport = require('passport');
const healthcheck = require('healthcheck-middleware');
const MongoClient = require('mongodb').MongoClient
const assert = require('assert');

var insertDocuments = (db, callback) => {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

class WebApp {
  constructor(app) {
    this.app = app;
    this.healthCheck();
    this.initDB();
    // this.authMiddleware();
    this.initServer();
  }

  healthCheck() {
    this.app.use('/ping', healthcheck());
  }

  authMiddleware() {
    this.app.get('/login', passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true
    }));
  }

  initDB() {
  const url = 'mongodb://localhost:27017/myproject';
  MongoClient.connect(url, (err, db) => {
    assert.equal(null, err);
    debugger;
    insertDocuments(db, () => {
      console.log('Everything is looking fine');
    });
    console.log("Connected successfully to Mongo");
    db.close();
    });
  }

  initServer() {
    this.app.listen(3000, () => {
      console.log('Server started on port 3000');
    })
  }

}

module.exports = new WebApp(express());

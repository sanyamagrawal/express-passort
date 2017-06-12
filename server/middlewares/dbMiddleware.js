const MongoClient = require('mongodb').MongoClient
const assert = require('assert');

const insertDocuments = (db, callback) => {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([{
    a : 1
  }, {
    a : 2
  }, {
    a : 3
  }], (err, result) => {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
};

const dbMiddleware = () => {
  const url = 'mongodb://localhost:27017/myproject';

  MongoClient.connect(url, (err, db) => {
    assert.equal(null, err);

    insertDocuments(db, () => {
      console.log('Everything is looking fine');
    });

    console.log("Connected successfully to Mongo");

    db.close();
  });
};

module.exports = dbMiddleware;

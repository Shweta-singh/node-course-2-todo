//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');
  // const db = client.db('TodoApp')
  // db.collection('Users').insertOne({
  //   name: 'Shweta',
  //   age: 23,
  //   location: 'New Delhi'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('unable to insert todo');
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });
   client.close();
});

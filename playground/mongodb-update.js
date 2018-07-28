const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');
   const db = client.db('TodoApp');

   db.collection('Users').findOneAndUpdate({
     _id: new ObjectID('5b5ac9c02c5f8121576f1af2')
   },{
     $set: {
       name: 'fkdgmndfk'
     },
     $inc: {
       age: 1
     }
   },{
        returnOriginal: false
   }).then((result) => {
     console.log(result);
   });
  // client.close();
});

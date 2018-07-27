const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');
   const db = client.db('TodoApp');
   // db.collection('Todos').find({
   //    _id: new ObjectID('5b5abd360b7d111fbc38bbee')
   //   }).toArray().then((docs) => {
   //   console.log('Todos');
   //   console.log(JSON.stringify(docs, undefined, 2));
   // }, (err) => {
   //   console.log('unable to fetch todos:', err);
   // });
   db.collection('Todos').find().count().then((count) => {
     console.log(`Todos count ${count}`);
     console.log(JSON.stringify(docs, undefined, 2));
   }, (err) => {
     console.log('unable to fetch todos:', err);
   });


  // client.close();
});

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');
   const db = client.db('TodoApp');
   // db.collection('Todos').deleteMany({text: 'coffee'}).then((result) => {
   //   console.log(result);
   // });
   // db.collection('Todos').deleteOne({text: 'coffee'}).then((result) => {
   //   console.log(result);
   // });
   db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
     console.log(result);
   })
  // client.close();
});

var express = require('express');
var bodyParser = require('body-parser');
var {ObjectId} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {user} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) =>{
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  }, (e) =>{
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) =>{
  Todo.find().then((todos) => {
    res.send({
      todos
    });
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) =>{
  var id = req.params.id;

  if(!ObjectId.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findById(id).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  })

});

app.listen(3000, () =>{
  console.log('Started on port 3000');
});


module.exports = {app};
// var newTodo = new Todo({
//   text: 'eat lunch',
// });
//
// newTodo.save().then((doc) => {
//   console.log('saved todo: ', doc);
// }, (e) =>{
//   console.log('unable to save');
// })
// var newUser = new Todo({
//   email: 'ssshweta560@gmail,com',
// });
//
// newUser.save().then((doc) => {
//   console.log('saved todo: ', doc);
// }, (e) =>{
//   console.log('unable to save');
// })

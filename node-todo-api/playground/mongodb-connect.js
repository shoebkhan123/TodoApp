var mongodb= require('mongodb');
const MongoClient= mongodb.MongoClient;

// const  {MongoClient, ObjectID}= mongodb.MongoClient;

// var obj =  new ObjectID();
// console.log(obj);
// var user = {name : 'Shoeb', age : 23};
// var {name} = user;
// console.log(name);

var URL = 'mongodb://127.0.0.1:27017/TodoApp';

MongoClient.connect(URL,function(err,database){
  if(!err){
    db=database;
  }
    console.log('connected');
    // db.collection('Todos').insertOne({
    // 	text: 'Walk the dog',
    // 	completed: true
    // }, (err, result) =>{
    // 	if (err) {
    // 		return console.log('Unable to insert', err);
    // 	}
    // 	console.log(JSON.stringify(result.ops, undefined, 2));
    // });


     db.collection('Users').insertOne({
    	name: 'Pria',
    	age: 21,
    	location: 'Vellore'
    }, (err, result) =>{
    	if (err) {
    		return console.log('Unable to insert', err);
    	}
    	    	console.log(JSON.stringify(result.ops, undefined, 2));
    	console.log(result.ops[0]._id.getTimestamp());
    
    });
    db.close();

  
});


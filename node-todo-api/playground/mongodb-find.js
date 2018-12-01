var mongodb= require('mongodb');
const MongoClient= mongodb.MongoClient;


var URL = 'mongodb://127.0.0.1:27017/TodoApp';

MongoClient.connect(URL,function(err,database){
  if(!err){
    db=database;
  }
    console.log('connected');

    // db.collection('Todos').find().toArray().then((docs) =>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) =>{
    //     console.log('Unable to fetch todos', err);
    // });
   
    // db.close();







    //  db.collection('Todos').find().count().then((count) =>{
    //     console.log(`Todos count : ${count}`);
    // }, (err) =>{
    //     console.log('Unable to fetch todos', err);
    // });
   
    // db.close();

    db.collection('Users').find({name: 'Pria'}).toArray().then((docs) =>{
        console.log(JSON.stringify(docs, undefined,2));
    });

    
});


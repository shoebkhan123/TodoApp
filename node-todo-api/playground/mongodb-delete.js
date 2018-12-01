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
   
    //delete many

    // db.collection('Users').deleteMany({
    //     name: "Pria"
    // }).then((result) =>{
    //     console.log(result);
    // });


    //dele one


    // db.collection('Users').deleteOnes({
    //     name: "Pria"
    // }).then((result) =>{
    //     console.log(result);
    // });

    //findOneAnd Delete

    db.collection('Users').findOneAndDelete({
        name: "Pria"
    }).then((result) =>{
        console.log(result);
    });



    //db.close();

  
});


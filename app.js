console.log('Startin app.js');

const fs = require('fs');
//fs.appendFile('greeting.txt', 'Hello Node');
// const os = require('os');

// var user = os.userInfo();
const _ = require('lodash');
const yargs = require('yargs');

const notes  =require('./notes.js');


const argv = yargs.argv;
// var command = process.argv[2];
// or 
var command = argv._[0];

console.log('Command', command);
console.log('Process', process.argv);
console.log(process.argv);
console.log('Yargs', argv);



if (command === 'add') {
	//console.log('Adding new note');
	notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
	notes.getAll();
	//console.log('Listing new note');
}
else if (command === 'fetch') {
	notes.getOne(argv.title);
	//console.log('fetcting new note');
}
else if (command === 'remove') {
	console.log('removing new note');
}
else{
	console.log('Command not recognized');
}

//console.log(process.argv);














//console.log(user);

// var filterArray = _.uniq(['Deepa', 1 , 'Shoeb','Pria', 1]);
// console.log(_.isString(true));
// console.log(_.isString('Deepa'));
// console.log(filterArray);


//fs.appendFile('greeting.txt', 'Hello' + user.username + '!');
// fs.appendFile('greeting.txt',
//  `Hello ${user.username}!`);

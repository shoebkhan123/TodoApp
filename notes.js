console.log('Starting note.js');





var addNote = (title, body) =>{
	console.log('adding note', title, body);
};

var getAll = () =>{
	console.log('Geting all notes');
};

var getOne = (title) =>{
	console.log('Geting one notes',	title);
};
module.exports = {
	// addNote: addNote
	addNote,
	getAll,
	getOne
};

// module.exports.addNote = () => {
// 	console.log('addNote');
// 	return 'new note';
// };
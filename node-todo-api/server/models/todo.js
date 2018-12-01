var mongoose = require('mongoose');

var Todo = mongoose.model('Todos',{
	text: {
		type: String,
		requires: true,
		minlength:1,
		trim: true
	},
	Completed: {
		type: Boolean,
		default: false
	},
	CompletedAt: {
		type: Number,
		default: null,
	}
});


module.exports = {Todo};
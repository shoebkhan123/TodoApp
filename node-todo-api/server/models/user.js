var mongoose = require('mongoose');


var User = mongoose.model('User', {
	eamil: {
		type: String,
		required:true,
		trim: true,
		minlength:1
	}
});


exports.model = {User}

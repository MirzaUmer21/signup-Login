const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		lowercase: true,
		unique: true,
	},
	address: {
		type: String,		
	},
	password: {
		type: String,
	},

});
 const User=mongoose.model("userData",UserSchema);
 module.exports=User;
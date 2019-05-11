const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mst_employee = new Schema({
	user: {
		type: String,
		required: true,
		unique: true,
		lowercase: true
	},
	password: {
		type: String,
		required: true
    },
    doctype: {
		type: String,
		required: true
    },
    name: {
		type: String,
		required: true
	},
	surname: {
		type: String,
		required: true
	},
	salary: {
		type: Number,
		required: true
	},
	OT: {
		type: Number,
		required: true
	},
	Bonus: {
		type: Number,
		required: true
	}
});


const Login = mongoose.model('mst_employee', mst_employee, 'mst_employee');

module.exports = Login;
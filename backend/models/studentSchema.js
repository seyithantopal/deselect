const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    id: { type: Number, required: true },
    firstName: {type: String, require: true },
    lastName: {type: String, require: true },
    age: {type: Number, require: true },
    nationality: {type: String, require: true },
});

const Student = mongoose.model('students', studentSchema);

module.exports = Student;
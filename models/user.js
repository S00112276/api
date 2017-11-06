const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create user Schema & model
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    password: {
        type: String
    },
    studentID: {
        type: String,
        required: [true, 'Student ID is required']
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
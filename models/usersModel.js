const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    Email: String,
    password: String,
    isAdmin: Boolean
}
//, {
//     timestamps: true
);

module.exports = mongoose.model('Users', usersSchema);

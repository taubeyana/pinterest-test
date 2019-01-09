const db = require('../pinterestDB');

const UserSchema = new db.Schema({
    firstName: String,
    lastName: String,
    email: String,
    location: String,
    about: String,
    img: String,
    website: String,
    username: String,
    title: String
});

const User = db.model('User', UserSchema);

module.exports = User;


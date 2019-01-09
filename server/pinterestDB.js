const mongoose = require('mongoose');
const pinterestDB = process.env.MONGODB_URI || 'mongodb://localhost:27017/pinterest';

mongoose.connect(pinterestDB)
.then(console.log('Connected to pinterestDB'))
.catch(err => console.log(err.message))

module.exports = mongoose;

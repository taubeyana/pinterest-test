const express = require('express');
const router = express.Router();
const User = require('./UserModel');

router.get('/', (req,res) => {
    User.find({}).then(user => res.send(user));
});

router.get('/:userId', (req,res) => {
    User.findById(req.params.userId).then(user => res.send(user));
});

router.post('/', (req,res) => {
    const user = new User(req.body);
    user.save()
    .then(user => res.send(user.toJSON()))
});

module.exports = router;



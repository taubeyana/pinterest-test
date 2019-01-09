const express = require('express');
const router = express.Router();
const Pin = require('./PinModel');


router.get('/', (req,res) => {
    let filter = {}
    if (req.query.search) {
        let regex = new RegExp(req.query.search, 'i')
        filter.$or = [
            { body: regex },
            { title: regex }
        ]
    }
    Pin.find(filter)
    .then(pin => res.send(pin))
    .catch(err => res.status(400).send(err.message));
});

router.get('/:pinId', (req,res) => {
    Pin.findById(req.params.pinId)
    .then(pin => res.send(pin))
    .catch(err => res.status(400).send(err.message));
});

router.post('/', (req,res) => {
    const pin = new Pin(req.body);
    console.log(req.body)
    pin.save()
    .then(pin => res.send(pin))
    .catch(err => res.status(400).send(err.message));
});

router.delete('/:pinId', (req,res) => {
    Pin.findByIdAndRemove(req.params.pinId)
    .then(pin => res.send(pin))
    .catch(err => res.status(400).send(err.message));
})

module.exports = router;
const db = require('../pinterestDB');

const PinSchema = db.Schema({
    title: String,
    body:String,
    img: String,
    link: String,
    category: String
})

const Pin = db.model('Pin', PinSchema);

// const many=pins.map(pin => {
//     return new Pin(pin)
// });
// Pin.insertMany(many)

module.exports = Pin;
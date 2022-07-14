const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: { type: String, required: true},
    link: { type: String, required: true},
    duration: { type: Number, required: true},
    date: { type: Date, required: true}
}, {
    timestamps: true,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
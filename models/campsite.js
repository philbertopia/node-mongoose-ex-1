const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campsiyeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamp: true
});

const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;
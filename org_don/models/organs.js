const mongoose = require('mongoose')
const Schema = mongoose.Schema

const organSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    organ: {
        type: String,
        required: true,
    },
    createdOnDate: {
        type: Date,
        default: Date.now
    },
})

const Organs = mongoose.model("organs", organSchema)

module.exports = Organs
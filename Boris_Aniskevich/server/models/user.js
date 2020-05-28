const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: false },
    status: { type: String, required: false },
    info: { type: String, required: false },
},
    { timestamps: true },
)

module.exports = mongoose.model('user', userSchema)
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    service: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    // requestType: {
    //     type: String,
    //     required: true,
    // },
    numOfPersons: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    geolocation: {
        type: String,
        required: true,
    },
    feedback: {
        type: String,
    },
    status: {
        type: String,
        required: true,
    }
    // ,    operatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Operator' }
},
    { timestamps: true }
)

module.exports = mongoose.model('Users', userSchema)
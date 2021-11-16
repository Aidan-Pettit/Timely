import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
    name: {
        first: {
            value: String,
            C: Number
        },
        last: {
            value: String,
            C: Number
        }
    },
    email: {
        value: String,
        C: Number
    },
    birthday: {
        value: String,
        C: Number
    },
    gender: {
        value: String,
        C: Number
    },
    location: {
        address: String,
        city: String,
        region: String,
        country: String,
        postalCode: String,
    },
    interests: Array,
    langauges: {
        main: {type: String, default: 'English'},
        all: {type: Array, default: ['English']}
    }
})

const Person = mongoose.model('Person', personSchema)

export default Person
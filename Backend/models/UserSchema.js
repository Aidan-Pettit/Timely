import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
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
    age: {
        birthday: String,
        yearsOld: String,
        C: Number
    },
    gender: {
        value: String,
        C: Number
    },
    location: {
        address: {
            value: String,
            C: Number
        },
        city: {
            value: String,
            C: Number
        },
        region: {
            value: String,
            C: Number
        },
        country: {
            value: String,
            C: Number
        },
        postalCode: {
            value: String,
            C: Number
        },
    },
    interests: Array,
    langauges: {
        main: {type: String, default: 'English'},
        all: {type: Array, default: ['English']}
    },
    pushNotificationToken: String,
    key: Number
})

const User = mongoose.model('User', userSchema)

export default User
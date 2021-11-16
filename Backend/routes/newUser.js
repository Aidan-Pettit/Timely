import express from 'express';
import User from '../models/UserSchema.js'

const router = express.Router()

router.get('/', async (req, res) => {
    const key = Math.random()
    const user = new User({
        key: key
    })

    user.save()

    const newUser = await User.find({key: key})
    console.log(user)
    res.send(newUser[0]._id)
})

export default router
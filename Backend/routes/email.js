import express from 'express';
import User from '../models/UserSchema.js'
import calculateCertainty from '../certainty/calculateCertainty.js'
import fakeCertainty from '../certainty/fakeCertainty.js'

const router = express.Router()

router.put('/', async (req, res) => {
    const user = await User.findById(req.body.userID)
    user.email.value = req.body.email
    user.email.C = fakeCertainty()

    user.save()
    res.send(user)
})

export default router
import express from 'express';
import User from '../models/UserSchema.js'
import fakeCertainty from '../certainty/fakeCertainty.js';

const router = express.Router()

router.put('/', async (req, res) => {
    const user = await User.findById(req.body.userID)

    user.name.first.value = req.body.firstName
    user.name.first.C = fakeCertainty()
    
    user.name.last.value = req.body.lastName
    user.name.last.C = fakeCertainty()

    user.save()
    res.send(user)
})

export default router
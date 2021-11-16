import express from 'express';
import User from '../models/UserSchema.js'
import fakeCertainty from '../certainty/fakeCertainty.js';

const router = express.Router()

router.put('/', async (req, res) => {
    const user = await User.findById(req.body.userID)
    const currentYear = new Date().getFullYear()

    user.age = {birthday: req.body.birthday, yearsOld: currentYear - req.body.birthday}

    user.age.birthday = req.body.birthday
    user.age.yearsOld = currentYear - req.body.birthday
    user.age.C = fakeCertainty()
    
    user.save()
    res.send(user)
})

export default router
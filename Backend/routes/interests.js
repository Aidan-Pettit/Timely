import express from 'express';
import User from '../models/UserSchema.js'
import formatInterests from '../functions/formatInterests.js'
import extractScheduleData from '../functions/extractScheduleData.js'


const router = express.Router()

router.put('/', async (req, res) => {
    const user = await User.findById(req.body.userID)
    
    const interests = extractScheduleData(req.body.schedule)
    const formattedInterests = formatInterests(interests)

    user.interests = formattedInterests
    user.save()
    res.send(user)
})

export default router
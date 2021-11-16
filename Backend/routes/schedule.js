import express from 'express'
import extractScheduleData from '../functions/extractScheduleData.js'
import Person from '../models/PersonSchema.js'
import User from '../models/UserSchema.js'
import { Expo } from 'expo-server-sdk'

const router = express.Router()

router.post('/', async (req, res) => {
    // const user = User.findById(req.body.userID)
    // const interests = extractScheduleData(schedule)
    // user.interests = interests

    const expo = new Expo()

    const messages = []

    const message = {
        to: req.body.pushNotificationToken,
        sound: 'default',
        body: req.body.schedule.title,
        data: { withSome: 'data' },
    }

    messages.push(message)

    const result = await expo.sendPushNotificationsAsync(messages)
    console.log(result)
})

export default router
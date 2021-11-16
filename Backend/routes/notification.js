import express from 'express'
import { Expo } from 'expo-server-sdk'

const router = express.Router()

router.post('/welcome', async (req, res) => {
    const expo = new Expo()

    const messages = []

    const message = {
        to: 'ExponentPushToken[rId8JmFHXX0r-E7WJsnqeZ]',
        sound: 'default',
        title: "Hello!",
        body: 'Welcome back!',
        data: {"_displayInForeground": true}
    }

    messages.push(message)

    const result = await expo.sendPushNotificationsAsync(messages)
    console.log(result)    
    res.send(result)
})

router.post('/update/email', async (req, res) => {
    const expo = new Expo()

    const message = [{
        to: 'ExponentPushToken[rId8JmFHXX0r-E7WJsnqeZ]',
        sound: 'default',
        title: "Email changed!",
        body: `Email changed to ${req.body.email}`,
        data: {"_displayInForeground": true}
    }]

    
    const result = await expo.sendPushNotificationsAsync(message)
    console.log(result)
    res.send('Successful!')
})

router.post('/update/name', async (req, res) => {
    const expo = new Expo()

    const message = [{
        to: 'ExponentPushToken[rId8JmFHXX0r-E7WJsnqeZ]',
        sound: 'default',
        title: "Name changed!",
        body: `Name changed to ${req.body.firstName} ${req.body.lastName}`,
        data: {"_displayInForeground": true}
    }]

    
    const result = await expo.sendPushNotificationsAsync(message)
    console.log(result)
    res.send(result)
})

router.post('/update/birthday', async (req, res) => {
    const expo = new Expo()

    const message = [{
        to: 'ExponentPushToken[rId8JmFHXX0r-E7WJsnqeZ]',
        sound: 'default',
        title: "Birthday changed!",
        body: `Birthday changed to ${req.body.birthday}`,
        data: {"_displayInForeground": true}
    }]

    
    const result = await expo.sendPushNotificationsAsync(message)
    console.log(result)
    res.send(result)
})

router.post('/timeout', async (req, res) => {
    const expo = new Expo()

    const message = [{
        to: 'ExponentPushToken[rId8JmFHXX0r-E7WJsnqeZ]',
        sound: 'default',
        title: "Hello!!!",
        body: `Hey! HEY! Look at me`,
        data: {"_displayInForeground": true}
    }]    
    
    setInterval(async () => {
        const result = await expo.sendPushNotificationsAsync(message)
        console.log(result)
    }, 5000)
})

export default router
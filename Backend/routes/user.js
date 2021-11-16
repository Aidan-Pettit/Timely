import express from 'express'
import User from '../models/UserSchema.js'

const router = express.Router()

router.get('/', async (req, res) => {
    const user = new User({
        name: 'Aidan Pettit',
        email: 'am.pettit23@gmail.com',
        age: 18
    })

    const result = user.save()    
    res.send(result)
})

router.get('/all', async (req, res) => {
    const users = await User.findAll()

    res.send(users)
})

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const user = await User.findOne({_id: req.body.userID})
        res.send(user)
    } catch (error) {
        res.send(error).status(404)
    }
})

export default router
import express from 'express'
import Person from '../models/PersonSchema.js'

const router = express.router()

router.get('/', async (req, res) => {
    const person = await Person.findOne({email: req.body.email})
    res.send(person)
})

router.get('/all', async (req, res) => {
    const people = await Person.findAll()
    res.send(people)
})

router.post('/', async (req, res) => {
    const person = new Person({
        email: req.body.email
    })

    person.save()
})

export default router
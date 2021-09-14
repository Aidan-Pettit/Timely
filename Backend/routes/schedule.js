import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
    res.send('Schedule')
})

router.post('/', async (req, res) => {
    
})


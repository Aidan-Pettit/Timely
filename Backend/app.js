import express from 'express'

const app = express()

if (!process.env.PORT) process.env.PORT = 1111

app.listen(process.env.PORT, () => {
    console.log('Timely backend is listening on port 1111')
})
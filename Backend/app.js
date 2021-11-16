import express from 'express'
import connectToMongoDB from './functions/connectToMongoDB.js'
import schedule from './routes/schedule.js'
import location from './routes/location.js'
import user from './routes/user.js'
import notification from './routes/notification.js'
import newUser from './routes/newUser.js'
import payments from './routes/payments.js'
import email from './routes/email.js'
import name from './routes/name.js'
import age from './routes/age.js'
import gender from './routes/gender.js'
import interests from './routes/interests.js'

const app = express()

app.use(express.json())

app.use('/api/schedule', schedule)
app.use('/api/location', location)
app.use('/api/user', user)
app.use('/api/notifications', notification)
app.use('/api/newUser', newUser)
app.use('/api/payments', payments)
app.use('/api/email', email)
app.use('/api/name', name)
app.use('/api/age', age)
app.use('/api/gender', gender)
app.use('/api/interests', interests)

connectToMongoDB()

app.get('/', (req, res) => {
    let schedule = []
    let monthIndex = 0
    const currentDate = new Date()

    while (monthIndex < 11){
        const monthArray = [
            [0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0],  
            [0, 0, 0, 0, 0, 0, 0]
        ] 
            
        const firstDayOfMonth = new Date(currentDate.getFullYear(), monthIndex, 1, 12, 0, 0, 0)
        
        let dateNumber = 1
        let currentDay = firstDayOfMonth.getDay()
        let currentWeek = 0
        
        while (dateNumber <= 30){
            monthArray[currentWeek][currentDay] = dateNumber           
    
            dateNumber++
            currentDay++
    
            if (currentDay == 7){
            currentWeek++
            currentDay = 0
            }
        }

        schedule.push(monthArray)
        monthIndex++

    }

    res.send(schedule)

})

if (!process.env.PORT) process.env.PORT = 1111

app.listen(process.env.PORT, () => {
    console.log('Timely backend is listening on port 1111')
})
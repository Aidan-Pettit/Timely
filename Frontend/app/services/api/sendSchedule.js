import axios from 'axios'

const scheduleURL = 'https://timely--backend.herokuapp.com/api/schedule'

const sendSchedule = async (title, description, token) => {
    console.log(title)
    console.log(description)
    console.log(token)

    const data = {
        schedule: {
            title: 'Hello World',
            description: 'Something'
        },
        pushNotificationToken: "ExponentPushToken[rId8JmFHXX0r-E7WJsnqeZ]"
    }
    console.log(data)

    await axios.post(scheduleURL, data)
}

export default sendSchedule
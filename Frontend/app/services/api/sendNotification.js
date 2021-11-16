import axios from 'axios'

const notificationURL = 'https://timely--backend.herokuapp.com/api/notifications'

const welcome = async () => {
    const result = await axios.post(notificationURL + '/welcome')
    return result
}

const updateEmail = async (email) => {
    const result = await axios.post(notificationURL + '/update/email', {email: email})
    return result
}

const updateName = async (firstName, lastName) => {
    const result = await axios.post(notificationURL + '/update/name', {firstName: firstName, lastName: lastName})
    return result
}

const updateBirthday = async (birthday) => {
    const result = await axios.post(notificationURL + '/update/birthday', {birthday: birthday})
    return result
}

export default {
    welcome,
    updateEmail,
    updateName,
    updateBirthday
}
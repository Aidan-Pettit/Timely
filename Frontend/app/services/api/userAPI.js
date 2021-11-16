import axios from 'axios';

const userURL = 'https://timely--backend.herokuapp.com/api/user'

const createUser = async () => {
    const user = await axios.get(userURL)
    return user
}

const getUser = async (userID) => {
    const user = await axios.post(userURL, {userID})
    return user
}

export default {
    createUser,
    getUser
}
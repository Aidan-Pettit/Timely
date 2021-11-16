import axios from 'axios';

const baseURL = 'https://timely--backend.herokuapp.com/api'

const email = async (userID, email) => {
    const result = await axios.put(baseURL + '/email', {userID, email})
    return result 
}

const name = async (userID, firstName, lastName) => {
    const result = await axios.put(baseURL + '/name', {userID, firstName, lastName})
    return result 
}

const birthday = async (userID, birthday) => {
    const result = await axios.put(baseURL + '/age', {userID, birthday})
    return result 
}

export default {
    email,
    name,
    birthday
}
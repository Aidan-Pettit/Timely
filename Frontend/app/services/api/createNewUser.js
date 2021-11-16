import axios from 'axios';

const newUserURL = 'https://timely--backend.herokuapp.com/api/newUser'

const createNewUser = async () => {
    const userID = await axios.get(newUserURL)
    return userID
}

export default createNewUser
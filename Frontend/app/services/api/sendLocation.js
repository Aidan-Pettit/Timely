import axios from 'axios'

const locationURL = 'https://timely--backend.herokuapp.com/api/location'

const sendLocation = async (lat, long) => {
    const result = await axios.put(locationURL, {userID: '61704eb8374bb9592e0f6859', lat: lat, long: long})
    return result.data
}

export default sendLocation
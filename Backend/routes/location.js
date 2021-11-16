import express from 'express'
import axios from 'axios'
import User from '../models/UserSchema.js'
import fakeCertainty from '../certainty/fakeCertainty.js'

const router = express.Router()

router.put('/', async (req, res) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${req.body.lat},${req.body.lng}&key=AIzaSyAN73lbKOss_e_ddJhWAHgvIZbuNh1Wd9g`
    const user = await User.findById(req.body.userID)

    // Use Google's Geolocation API
    const result = await axios.get(url)
    const location = result.data.results[0].address_components
    
    // Assign information to variables
    const address = location[0].long_name + ' ' + location[1].long_name
    const city = location[2].long_name
    const region = location[4].long_name
    const country = location[5].long_name
    const postalCode = location[6].long_name

    // Assign values to user

    // user.location = {
    //     address: {
    //         value: address,
    //         C: fakeCertainty()
    //     },
    //     city: {
    //         value: city,
    //         C: fakeCertainty()
    //     },
    //     region: {
    //         value: region,
    //         C: fakeCertainty()
    //     },
    //     country: {
    //         value: country,
    //         C: fakeCertainty()
    //     },
    //     postalCode: {
    //         value: postalCode,
    //         C: fakeCertainty()
    //     },
    // }

    user.location.address.value = address
    user.location.address.C = fakeCertainty()

    user.location.city.value = city
    user.location.city.C = fakeCertainty()

    user.location.region.value = region
    user.location.region.C = fakeCertainty()

    user.location.country.value = country
    user.location.country.C = fakeCertainty()

    user.location.postalCode.value = postalCode
    user.location.postalCode.C = fakeCertainty()

    user.save()
    res.send(user)
})

export default router
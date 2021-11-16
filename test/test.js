import axios from 'axios';

const data = [
    {title: "Shoot Hoops", description: "Practice shooting the basketball outside."}
]

async function getInterests() {
    const interests = await axios.post('http://localhost:1111/api/schedule', data)

    console.log(interests)
}

getInterests()
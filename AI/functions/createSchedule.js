import convertToArray from './convertToArray.js';
import random from './algorithms/random.js'
import arrange from './algorithms/arrange.js'

export default function createSchedule(activities, alg) {
    let schedule = []
    const activityArray = convertToArray(activities)

    if (alg == 'order') schedule = activityArray
    if (alg == 'random') schedule = random(activityArray)
    if (alg == 'arrange') schedule = arrange(activityArray)
    // if (alg == '')
    console.log(schedule)
}
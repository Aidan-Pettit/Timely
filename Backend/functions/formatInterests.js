import interestAffinity from '../affinity/interestAffinity.js'
import returnUniqueArray from './returnUniqueArray.js'

function formatInterests(interests) {
    const formattedInterests = []
    const uniqueInterests = returnUniqueArray(interests)

    for (let interest of uniqueInterests) {
        let timesInArray = 0

        for (let item of interests) {
            if (item == interest) timesInArray++
        }

        const newAffinity = interestAffinity(0, timesInArray, 0)
        formattedInterests.push({value: interest, A: newAffinity})
    }
    return formattedInterests
}

export default formatInterests
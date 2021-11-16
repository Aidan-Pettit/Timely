import interestLegend from '../legends/interestLegend.js'
import returnUniqueArray from './returnUniqueArray.js'


function extractScheduleData(schedule) {
    const wordList = []
    const interests = []

    for (let activity of schedule) {
        let currentWord = ''

        for (let char of activity.title) {
            if (char == ' ') {
                wordList.push(currentWord)
                currentWord = ''
            }
            else currentWord += char
        }

        wordList.push(currentWord)
        currentWord = ''

        for (let char of activity.description) {
            if (char == ' ') {
                wordList.push(currentWord)
                currentWord = ''
            }
            else currentWord += char
        }

        wordList.push(currentWord)
        currentWord = ''
    }

    for (let word of wordList) {
        for (let item of interestLegend.sports){
            if (word.toLowerCase() == item) interests.push(item)
        }

        for (let item of interestLegend.games){
            if (word.toLowerCase() == item) interests.push(item)
        }

        for (let item of interestLegend.excercise){
            if (word.toLowerCase() == item) interests.push(item)
        }

        for (let item of interestLegend.hobbies){
            if (word.toLowerCase() == item) interests.push(item)
        }
    }

    // const newArray = returnUniqueArray(interests)
    
    return interests 
}

export default extractScheduleData
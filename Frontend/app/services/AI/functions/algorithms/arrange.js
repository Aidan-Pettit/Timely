export default function arrange(activities){
    const schedule = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const sleep = []
    const eat = []
    const do_school_work = []
    const play_video_games = []


    let index = 0

    for (let item of activities) {
        if (item == 'sleep') sleep.push(item)
        if (item == 'eat') eat.push(item)
        if (item == 'do school work') do_school_work.push(item)
        if (item == 'play video games') play_video_games.push(item)
    }

    for (let item of sleep) {
        schedule[index] = item
        index++
    }

    for (let item of eat) {
        schedule[index] = item
        index++
    }

    for (let item of do_school_work) {
        schedule[index] = item
        index++
    }

    for (let item of play_video_games) {
        schedule[index] = item
        index++
    }

    return schedule
}

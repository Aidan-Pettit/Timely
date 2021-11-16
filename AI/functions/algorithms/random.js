export default function random(activities){
    const schedule = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let index = 0

    for (let item of activities) {
        do {
            index = Math.floor(Math.random() * (24 - 0));
        } while (schedule[index] !== 0)

        schedule[index] = item
    }

    return schedule
}

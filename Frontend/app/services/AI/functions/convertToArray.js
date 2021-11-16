export default function convertToArray(activities) {
    const activityArray = [];

    for (let item of activities) {
        let i = 0

        while (i < item.duration){
            activityArray.push({title: item.title, duration: item.duration});
            i++
        }
    }

    return activityArray
}
export default function convertToArray(activities) {
    const activityArray = [];

    for (let item of activities) {
        let i = 0

        while (i < item.duration){
            activityArray.push(item.activity);
            i++
        }
    }

    return activityArray
}
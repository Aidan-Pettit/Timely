export default function(array) {
    const newArray = []

    for (let item of array) {
        if (!newArray.includes(item)) newArray.push(item)
    }

    return newArray
}
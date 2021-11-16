import AsyncStorage from "@react-native-async-storage/async-storage";
import createAsyncKey from './createAsyncKey'

const getSchedule = async (key) => {
    const titleKey = key + '-title'
    const descriptionKey = key + '-description'

    const title = AsyncStorage.getItem(titleKey)
    const description = AsyncStorage.getItem(descriptionKey)

    return {title: title, description: description}
}

export default getSchedule
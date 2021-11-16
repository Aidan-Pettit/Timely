import AsyncStorage from '@react-native-async-storage/async-storage';
import createAsyncKey from './createAsyncKey';

const setSchedule = async (title, description, key) => {
    const titleKey = key + '-title'
    const descriptionKey = key + '-description'
    
    await AsyncStorage.setItem(titleKey, title)
    await AsyncStorage.setItem(descriptionKey, description)
}

export default setSchedule
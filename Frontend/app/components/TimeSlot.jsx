import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import createAsyncKey from '../services/storage/createAsyncKey';
import getSchedule from '../services/storage/getSchedule'


function TimeSlot({hour, year, month, day}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        getActivity()
    }, [])
    
    const getActivity = async () => {
        const key = createAsyncKey(year, month, day, hour);
        console.log(key)
        
        const activity = await getSchedule(key)

        setTitle(activity.title)
        setDescription(activity.description)
    }

    if (!year) year = '2021'

  return (
    <>
        <View style={styles.container}>
            <Text>{hour}</Text>
            <Text>{title}</Text>
            <Text>{description}</Text>
        </View>
        <View>
            <Modal>
                <Text>Create New Activity</Text>
            </Modal>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 65,
    width: 400,
    borderBottomWidth: 2,
    borderBottomColor: 'black'
  }
});

export default TimeSlot;
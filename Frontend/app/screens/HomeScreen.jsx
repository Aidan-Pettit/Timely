import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, Button } from 'react-native';
import TimeSlot from '../components/TimeSlot'

function HomeScreen(props) {
    let sData = []
    const [data, setData] = useState([])
    const [index, setIndex] = useState(0)
    console.log(sData)

    const addActivity = (activity) => {
        sData = data
        sData.push([activity, index.toString()])
        setData(sData)
        setIndex(index + 1)   
        console.log(sData)    
    }
    
    return (
    <>
      <View style={styles.container}>
        <Button title='Sleep' onPress={() => addActivity('sleep')} style={styles.button}/>
        <Button title='Eat' onPress={() => addActivity('eat')} style={styles.button}/>
        <Button title='Work' onPress={() => addActivity('work')} style={styles.button}/>
        <Button title='Rest' onPress={() => addActivity('rest')} style={styles.button}/>
        <Button title='Exercise' onPress={() => addActivity('exercise')} style={styles.button}/>
        <Button title='Play' onPress={() => addActivity('play')} style={styles.button}/>
    </View>
    <View style={styles.container}>
        <FlatList 
        data={data}
        keyExtractor={item => item[1]}
        renderItem={activity => <TimeSlot activity={activity.item[0]} time={activity.item[1]}/>}
        />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
  },

  button: {
      backgroundColor: 'purple'
  }
});

export default HomeScreen;
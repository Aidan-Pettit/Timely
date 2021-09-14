import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function TimeSlot({activity, time}) {
    let colour = 'tomato'
    let AMorPM = 'AM'
    let stime = time

    if (activity == 'sleep') colour = 'blue'
    if (activity == 'eat') colour = 'orange'
    if (activity == 'work') colour = 'red'
    if (activity == 'rest') colour = 'green'
    if (activity == 'exercise') colour = 'gold'
    if (activity == 'play') colour = 'hotpink'

    if (time >= 12) {
        stime = time - 12
        AMorPM = 'PM'
    }

    if (stime == 0) stime = 12
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colour,
        height: 65,
        borderWidth: 5,
        borderColor: 'skyblue',
        margin: 10
    }}>
        <Text style={styles.text}>{activity}</Text>

        <Text style={styles.text}>{stime} {AMorPM}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},

  text: {
    color: 'white'
  }
});

export default TimeSlot;
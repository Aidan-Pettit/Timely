import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import ActivityDisplay from '../../components/ActivityDisplay'
import dateLegends from '../../legends/dateLegends'

function DayScreen({schedule}) {
    const [date, setDate] = useState(new Date())

  return (
    <View style={styles.container}>
        <Text>Day Schedule</Text>
        <Text>{dateLegends.months[date.getMonth()]}</Text>
        <Text>{date.getDate()}</Text>

        <FlatList 
          data={['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM']}
          keyExtractor={key => key}
          renderItem={({item}) => 
          <View style={styles.timeSlot}>
            <Text style={styles.text}>{item}</Text>
            <ActivityDisplay date={date} schedule={schedule}/>
          </View>}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},

  text: {
    fontSize: 20
  },

  timeSlot: {
    flex: 1,
    height: 65,
    width: 400,
    borderBottomWidth: 2,
    borderBottomColor: 'black'
  },
});

export default DayScreen;
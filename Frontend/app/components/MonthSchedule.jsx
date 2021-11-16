import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
// import dateLegend from '../legends/dateLegends'
import DateBlock from './DateDisplay'
import WeekRow from './WeekRow'

function ScheduleScreen({monthIndex}) {
  if (monthIndex == undefined) monthIndex = new Date().getMonth()

  const days = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday'
]

const months = [
    'January', 
    'February', 
    'March',
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
]

  const currentDate = new Date()
    
  const firstDayOfMonth = new Date(currentDate.getFullYear(), monthIndex, 1, 12, 0, 0, 0)

  const monthArray = [
    [0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0],  
    [0, 0, 0, 0, 0, 0, 0]
  ] 
  
  let dateNumber = 1
  let currentDay = firstDayOfMonth.getDay()
  let currentWeek = 0
  
  // Fill array with days of the month
  while (dateNumber <= 30){
    monthArray[currentWeek][currentDay] = dateNumber

    dateNumber++
    currentDay++

    if (currentDay == 7){
      currentWeek++
      currentDay = 0
    }
  }

  const [month, setMonth] = useState(monthArray)

  return (
    <View style={styles.container}>
        <Text style={styles.text}>{months[monthIndex]}, {firstDayOfMonth.getFullYear()}</Text>
        <WeekRow date1="Sun" date2='Mon' date3='Tues' date4='Wed' date5='Thur' date6='Fri' date7='Sat'/>

        <FlatList
        data={month}
        keyExtraxtor={key => key}
        renderItem={({item}) => <WeekRow 
        date1={{date: item[0], month: monthIndex}}
        date2={{date: item[1], month: monthIndex}} 
        date3={{date: item[2], month: monthIndex}} 
        date4={{date: item[3], month: monthIndex}} 
        date5={{date: item[4], month: monthIndex}} 
        date6={{date: item[5], month: monthIndex}} 
        date7={{date: item[6], month: monthIndex}}/>}
        />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: '100%'
  },

  shcedule: {
    flexDirection: 'row'
  },

  text: {
    fontSize: 40,
    paddingTop: 20,
    paddingBottom: 20
  }
});

export default ScheduleScreen;
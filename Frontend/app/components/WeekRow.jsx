import React from 'react';
import { View, StyleSheet } from 'react-native';
import DateBlock from './DateDisplay'

function WeekRow({date1, date2, date3, date4, date5, date6, date7}) {
  return (
    <View style={styles.container}>
        <DateBlock date={date1} colour='gold'/>
        <DateBlock date={date2} colour='tomato'/>
        <DateBlock date={date3} colour='pink'/>
        <DateBlock date={date4} colour='lightgreen'/>
        <DateBlock date={date5} colour='hotpink'/>
        <DateBlock date={date6} colour='skyblue'/>
        <DateBlock date={date7} colour='mintcream'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row'
  }
});

export default WeekRow;
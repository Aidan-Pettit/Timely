import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MonthSchedule from '../../components/MonthSchedule'

function MonthScreen(props) {
  return (
    <View style={styles.container}>
        <MonthSchedule />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: '100%'
  }
});

export default MonthScreen;
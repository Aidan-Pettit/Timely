import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MonthSchedule from '../../components/MonthSchedule'

function YearScreen(props) {
  return (
    <View style={styles.container}>
        <FlatList 
        data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
        renderItem={({item}) => <MonthSchedule monthIndex={item}/>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default YearScreen;
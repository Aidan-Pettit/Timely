import React, { useState, useEffect, TextInput } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal, SafeAreaView, Button, FlatList } from 'react-native';
import ActivityDisplay from './ActivityDisplay';
import getSchedule from '../services/storage/getSchedule'
import { Formik } from 'formik';
import TimeSlot from '..'


function DateBlock({date, colour}) {
  const [dayScheduleVisible, setDayScheduleVisible] = useState(false)
  const [schedule, setStateSchedule] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)

  const loadSchedule = async () => {
    const schedule = await getSchedule({date: date.date, month: date.month})

    if (schedule) setStateSchedule(schedule)
  }

  // Get schedule from Async Storage
  useEffect(() => {
    loadSchedule()
  }, [])
  
  return (
    <View>
      <TouchableOpacity style={{
        flex: 1,
        borderWidth: 5,
        borderColor: 'black',
        backgroundColor: colour,
        width: 60,
        height: 60
      }} onPress={() => setDayScheduleVisible(true)}>
        {date.date !== 0 && <Text style={styles.text}>{date.date}</Text>}
      </TouchableOpacity>

      {date.date !==0 && <Modal visible={dayScheduleVisible} animationType='slide'>
        <SafeAreaView style={styles.container}>
          <Text>September, {date.date}</Text>

          {/* Render Activity Displays */}
          <FlatList 
          data={['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM']}
          keyExtractor={key => key}
          renderItem={({item}) => <TimeSlot year="2021" month={date.month} day={date.date} hour={item}/>}
          />

          <Button title="Create Schedule" onPress={() => setIsModalVisible(true)}/>
          <Button title="Close" onPress={() => setDayScheduleVisible(false)}/>

          <Modal visible={isModalVisible} animationType='fade'>
            <SafeAreaView style={styles.container}>
            <Text style={styles.title} >Add Activity</Text>
                {<Formik initialValues={{title: '', description: ''}} onSubmit={values => handleSubmit(values)}>
                {({handleChange, handleSubmit, errors}) => (
                  <>
                    <TextInput style={styles.input} placeholder="Title" autoFocus onChangeText={handleChange('title')}/>

                    <TextInput style={styles.input} placeholder="Description" onChangeText={handleChange('description')}/>
                    
                    <Button title="Create Activity" onPress={handleSubmit}/>
                    </>
                )}
                </Formik>}
            </SafeAreaView>
            </Modal>

        </SafeAreaView>
      </Modal>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

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

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },

  title: {
    fontSize: 20
  },

  description: {
    fontSize: 10
  },

  input: {
    height: 20,
    width: 300,
    borderWidth: 5, 
    borderColor: 'grey',
    borderRadius: 10,
    margin: 25,
    padding: 15
  }
});

export default DateBlock;
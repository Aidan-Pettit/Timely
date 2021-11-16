import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button, TextInput, Modal, SafeAreaView, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import setSchedule from '../services/storage/setSchedule';

function ActivityDisplay({date, schedule, visible}) {
  const [title, setTitle]= useState('')
  const [description, setDescription]= useState('')
  const [isVisible, setIsVisible] = useState(false)

  const setVisible = () => {
    setIsVisible(visible)
  }

  useEffect(() => {

  }, [])

  const handleSubmit = async ({title, description}) => {
    setTitle(title)
    setDescription(description)
    setIsVisible(false)

    await setSchedule({title, description}, date)
  }

  return (
    <View style={styles.container}>
            {title !== '' && <Text style={styles.title}>{title}</Text>}
            {description !== '' && <Text style={styles.description}>{description}</Text>}

            {/* {title == '' && <Button title="Add Activity" onPress={() => setIsVisible(true)}/>} */}

            <Modal visible={isVisible} animationType='fade'>
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
    </View>
  );
}

const styles = StyleSheet.create({
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

export default ActivityDisplay;
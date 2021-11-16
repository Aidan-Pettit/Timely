import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';
import Input from '../components/Input';
import updateInfo from '../services/api/updateInfo'
import sendNotification from '../services/api/sendNotification';
import AsyncStorage from '@react-native-async-storage/async-storage'

function InfoScreen(props) {
    const [userID, setUserID] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthday, setBirthday] = useState('')

    useEffect(() => {
        getUserID()
    }, [])

    const submitEmail = async () => {
        // const result = await updateInfo.email(userID, email)
        await sendNotification.updateEmail(email)
        console.log(result)
    }
    
    const submitName = async () => {
        // const result = await updateInfo.name(userID, firstName, lastName)
        await sendNotification.updateName(firstName, lastName)
        console.log(result)    
    }
    
    const submitBirthday = async () => {
        // const result = await updateInfo.birthday(userID, birthday)
        await sendNotification.updateBirthday(birthday)
        console.log(result)    
    }

    const getUserID = async () => {
        const userID = await AsyncStorage.getItem('userID')
        setUserID(userID)
    }

  return (
    <View style={styles.container}>
        <Text>Info Screen</Text>

        <Input placeholder="Email" onChangeText={value => setEmail(value)} value={email}/>
        <Button title="Sumbit Email" onPress={() => submitEmail()}/>

        <Input placeholder="First Name" onChangeText={value => setFirstName(value)} value={firstName}/>
        <Input placeholder="Last Name" onChangeText={value => setLastName(value)} value={lastName}/>
        <Button title="Sumbit Name" onPress={() => submitName()}/>

        <Input placeholder="Birthday" onChangeText={value => setBirthday(value)} value={birthday}/>
        <Button title="Sumbit Birthday" onPress={() => submitBirthday()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default InfoScreen;
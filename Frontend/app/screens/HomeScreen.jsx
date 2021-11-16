import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
// import { navigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabActions } from '@react-navigation/native';
import { MaterialCommunityIcons, AntDesign, Fontisto } from '@expo/vector-icons'
import * as Location from 'expo-location';
import DayScreen from './schedule/DayScreen'
import MonthScreen from './schedule/MonthScreen'
import YearScreen from './schedule/YearScreen';
import sendLocation from '../services/api/sendLocation'

const Tab = createBottomTabNavigator()

function HomeScreen({navigation}) {
    const [year, setYear] = useState(new Date().getFullYear())
    
    useEffect(() => {
        // const jumpToAction = TabActions.jumpTo('This Month');
        // navigation.dispatch(jumpToAction);
    }, [])

    // const getLocation = async () => {
    //   const response = await Location.getCurrentPositionAsync()
    //   alert(response)
    //   return response
    // }
  
    // const setLocation = async () => {
    //   sendLocation('45', '-80')
    //   // const location = await getLocation()
    //   // console.log(location)
    //   // alert('setLocation')
    //   // sendLocation(location.coords.latitude, location.coords.longitude)    
    // }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.navbar}>
            <TouchableOpacity style={{height: '100%'}}>
                <MaterialCommunityIcons style={styles.dots} name="dots-horizontal" size={40}/>
            </TouchableOpacity>
        </View>

        <Tab.Navigator screenOptions={{
            tabBarActiveBackgroundColor: 'darkviolet',
            tabBarActiveTintColor: 'white',
            tabBarInactiveBackgroundColor: 'lightgray',
            tabBarInactiveTintColor: 'black'
          }}>

            <Tab.Screen name="Today" component={DayScreen} options={{tabBarIcon: ({color}) => 
            <Fontisto style={styles.icon} name="day-sunny" size={30} color={color}/>, title: 'Today'}}/>

            <Tab.Screen name="This Month" component={MonthScreen} options={{tabBarIcon: ({color}) => 
            <AntDesign style={styles.icon} name="calendar" size={30} color={color}/>, title: 'This Month'}}/>

            <Tab.Screen name="This Year" component={YearScreen} options={{tabBarIcon: ({color}) => 
            <Text style={{fontSize: 25, color: color}}>{year}</Text>, title: 'This Year'}}/>

        </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      width: '100%'
  },

  icon: {
    shadowColor: 'grey', 
    shadowOffset: {width: 2, height: 2}, 
    shadowOpacity: 1
  },

  navbar: {
      flexDirection: 'row-reverse',
      height: 50,
      width: '100%'
  },

  dots: {
      padding: 10
  }
});

export default HomeScreen;
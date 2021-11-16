import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Settings, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Location from 'expo-location';
import NavigatorScreen from './app/screens/NavigatorScreen';
import sendNotification from './app/services/api/sendNotification'
import sendLocation from './app/services/api/sendLocation'
import DrawerNav from './app/components/DrawerNav'

// const Stack = createNativeStackNavigator()

export default function App() {

  useEffect(() => {
    setLocation()
    notification()
  }, [])
  
  const getLocation = async () => {
    const response = await Location.getCurrentPositionAsync()
    console.log(response)
    return response
  }
  
  const setLocation = async () => {
    // const location = await getLocation()
    // sendLocation(location.coords.latitude, location.coords.longitude)    
    sendLocation(1, 1)
  }

  const notification = async () => {
    await sendNotification.welcome()
  }
  
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <View style={{flex: 1, backgroundColor: 'blue'}}>
          <Text>Hello</Text>
          <Button title="Button"/>
        </View> */}

          <DrawerNav />

          {/* <HomeScreen /> */}

          {/* <InfoScreen /> */}

          {/* <ShopScreen /> */}

          {/* <Stack.Navigator initialRouteName="Navigator">
            <Stack.Screen name="Navigator" component={NavigatorScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Shopping" component={ShopScreen} />
            <Stack.Screen name="Information" component={InfoScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Terms and Conditions" component={AgreementScreen} />
          </Stack.Navigator> */}

          {/* <NavigatorScreen /> */}

        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },

  drawer: {
    flex: 1
  }
});

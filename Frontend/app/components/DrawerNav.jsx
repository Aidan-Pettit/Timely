import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen'
import AgreementScreen from '../screens/AgreementScreen'
import InfoScreen from '../screens/InfoScreen'
import SettingsScreen from '../screens/SettingsScreen'
import ShopScreen from '../screens/ShopScreen';

const Drawer = createDrawerNavigator();

function DrawerNav(props) {
  return (
    <View style={styles.container}>
        <Drawer.Navigator style={styles.drawer} initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Shopping" component={ShopScreen} />
            <Drawer.Screen name="Information" component={InfoScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
            <Drawer.Screen name="Terms and Conditions" component={AgreementScreen} />
        </Drawer.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: '100%'
  }
});

export default DrawerNav;
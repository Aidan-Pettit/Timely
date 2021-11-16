import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

function NavigatorScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Button title="Home" onPress={navigation.navigate('Home')} />
        <Button title="Shopping" onPress={navigation.navigate('Shopping')} />
        <Button title="Information" onPress={navigation.navigate('Information')} />
        <Button title="Settings" onPress={navigation.navigate('Settings')} />
        <Button title="Terms and Conditions" onPress={navigation.navigate('Terms and Conditions')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center'
  }
});

export default NavigatorScreen;
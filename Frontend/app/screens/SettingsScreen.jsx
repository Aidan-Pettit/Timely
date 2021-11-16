import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SettingsScreen(props) {
  return (
    <View style={styles.container}>
        <Text>Settings Screen</Text>

        <Text>Dark Mode</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default SettingsScreen;
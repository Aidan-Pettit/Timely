import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

function Input({placeholder, keyboardType, autoFocus, onChangeText, value}, ...props) {
  return (
    <View style={styles.container}>
        <TextInput style={styles.textInput} 
        autoCapitalize="none" 
        autoCorrect={false} 
        autoFocus={autoFocus} 
        keyboardType={keyboardType} 
        placeholder={placeholder} 
        onChangeText={onChangeText} 
        value={value}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      width: 300,
      height: 40,
      justifyContent: 'center',
      borderColor: 'darkgreen',
      borderWidth: 2,
      borderRadius: 20,
      margin: 15,
      paddingLeft: 10,
      backgroundColor: 'azure',
      shadowColor: 'lightgray',
      shadowOffset: {width: 5, height: 5},
      shadowOpacity: 1
  },

  textInput: {
    fontSize: 18
  }
});

export default Input;
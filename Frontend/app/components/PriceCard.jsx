import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

function PriceCard({item, price}) {
  return (
    <View style={styles.container}>
        <Text>{item}</Text>
        <Text>{'$' + price}</Text>
        <Button title="Purchase" onPress={() => alert('Purchased ' + item + '!')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
      width: 150,
      backgroundColor: 'white',
      margin: 15
  }
});

export default PriceCard;
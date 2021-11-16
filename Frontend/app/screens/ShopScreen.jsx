import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import PriceCard from '../components/PriceCard';


function ShopScreen({navigation}) {
    useEffect(() => {
    }, [])

  return (
    <View style={styles.container}>
        <Text>Shop Screen</Text>

        <PriceCard item="Monthly Subscription" price={15}/>

        <PriceCard item="Yearly Subscription" price={60}/>

        <Button title="Open Drawer" onPress={() => navigation.openDrawer()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      backgroundColor: 'aqua'
  }
});

export default ShopScreen;
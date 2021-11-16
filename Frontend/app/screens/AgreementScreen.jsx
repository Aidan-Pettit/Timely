import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function AgreementScreen(props) {
  return (
    <View style={styles.container}>
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quam facilis rerum earum, expedita fugit laboriosam labore vel obcaecati ipsa neque laborum dolores nam, impedit nihil omnis adipisci, vitae nesciunt quo atque. Quos magnam facere eius totam, ipsum doloribus debitis error impedit laudantium quis omnis veritatis a in molestias aperiam. Atque, quibusdam obcaecati, commodi in officiis a possimus suscipit mollitia reiciendis assumenda quas voluptate odit at necessitatibus magni ad distinctio quod voluptas sequi corrupti culpa error maiores voluptatum rerum? Quo, earum esse aliquam dolores, eveniet deserunt illum voluptatum ab labore temporibus in? Dignissimos corrupti excepturi libero sapiente quia eligendi facilis?</Text>

        <Button title="I Agree" onPress={() => alert('Agreed.')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default AgreementScreen;
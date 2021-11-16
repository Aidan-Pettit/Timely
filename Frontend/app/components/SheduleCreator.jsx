import React from 'react';
import { View, StyleSheet } from 'react-native';

function SheduleCreator(props) {
    const handleSubmit = async ({title, description}) => {
        
        setTitle(title)
        setDescription(description)
        setIsVisible(false)
        
        await setSchedule({title, description}, date)
    }

  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.container}>
            <Text style={styles.title} >Add Activity</Text>
                {<Formik initialValues={{activity: '', duration: ''}} onSubmit={values => handleSubmit(values)}>
                {({handleChange, handleSubmit, errors}) => (
                  <>
                    <TextInput style={styles.input} placeholder="Title" autoFocus onChangeText={handleChange('activity')}/>

                    <TextInput style={styles.input} placeholder="Description" onChangeText={handleChange('')}/>
                    
                    <Button title="Create Activity" onPress={handleSubmit}/>
                    </>
                )}
                </Formik>}
        </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default SheduleCreator;
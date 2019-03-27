import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity} from 'react-native';

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textHeader}> - Note - </Text>
        </View>
        <ScrollView style={styles.scrollContainer}>

        </ScrollView>
        <View style={styles.footer}>
            <TextInput
            style={styles.textInput}
                placeholder="Write not here"
                placeholderTextColor="black"/>

        </View>
        <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}> + </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
      backgroundColor: '#E91E63',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 3,
      borderBottomColor: '#ddd',
  },
  textHeader:{
      color : 'white',
      fontSize : 18,
      paddingTop: 40,
      paddingBottom: 30,

  },
  scrollContainer:{
      flex : 1,
      marginBottom: 100,
  },
  footer:{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,

  },
  textInput :{
      alignSelf : 'stretch',
      color : '#fff',
      padding: 30,
      backgroundColor : '#252525',
      borderTopWidth: 2,
      borderTopColor: '#ededed',

  }
});
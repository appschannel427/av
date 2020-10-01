import React, { Component } from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View, Text } from 'react-native';
import firebase from '../database/firebaseDb';

class UserDetailScreen extends Component {

  constructor() {
    super();
    
    this.state = {
      chapter: '',
      
      isLoading: true
      
    };
  }

  componentDidMount() {
  
    const dbRef = firebase.firestore().collection('DataList').doc(this.props.route.params.userkey)
    dbRef.get().then((res) => {
      if (res.exists) {
        const user = res.data();
        this.setState({
          key: res.id,
          chapter: user.chapter,
        
          isLoading: false
        });
      } else {
        console.log("Document does not exist!");
      }
    });
  }

 

  render() {

    
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }
    return (
      
      <ScrollView style={styles.container}>
              <Text style={styles.titleText} >
        {this.props.route.params.uservalue} 
        {"\n"}
        {"\n"}
      </Text>
        <Text style={styles.inputGroup} >
        {this.state.chapter}
        {"\n"}
        {"\n"}
      </Text>
        
      </ScrollView>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginBottom: 7, 
  }
})



  
export default UserDetailScreen;
// screens/UserScreen.js

import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '../database/firebaseDb';

class UserScreen extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('Cat');
    this.state = {
      isLoading: true,
      userArr: []
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const userArr = [];
    querySnapshot.forEach((res) => {
      const { c_id, cat } = res.data();
      userArr.push({
        key: res.id,
        res,
        c_id,
        cat,
       
      });
    });
    this.setState({
      userArr,
      isLoading: false,
   });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader,styles.text}>
          <ActivityIndicator size="large" color="#263238"/>
        </View>
      )
    }    
    return (
      <ScrollView style={styles.container}>
          {
            this.state.userArr.map((item, i) => {
              return (



                
                <ListItem
                style={styles.itemContainer}
                  key={i}
                  chevron
                  bottomDivider
                  titleStyle={styles.text}
                  title={item.cat}
                 
                  onPress={() => {
                    this.props.navigation.navigate('UserDetailScreen', {
                      userkey: item.key, uservalue: item.cat,
                    });
                  }}/>
              );
            })
          }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#455a64',
   paddingBottom: 22,
   paddingTop:10
   
  },
  preloader: {
    left: 0,
    right: 0,
    elevation: 3,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemContainer: {
    marginHorizontal: 10,

    backgroundColor: 'white',
    borderRadius: 10,
   
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 10
  },
  text: {
    fontSize: 22,
    fontWeight: '400',
    color: '#263238'
  }
})

export default UserScreen;
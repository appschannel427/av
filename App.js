import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import UserScreen from './screens/UserScreen';
import UserDetailScreen from './screens/UserDetailScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
       
          headerStyle: {
            backgroundColor: '#0097a7',
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
        
            
   
          },
          
        }}>

      <Stack.Screen 
        name="UserScreen" 
        component={UserScreen} 
        options={{    title: 'Chapter List' }}
      />
      <Stack.Screen 
       name="UserDetailScreen" 
       component={UserDetailScreen} 
       options={{  title: 'Chapter Detail' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
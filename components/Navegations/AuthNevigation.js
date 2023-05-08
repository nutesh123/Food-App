import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const AuthNevigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  )
}

export default AuthNevigation
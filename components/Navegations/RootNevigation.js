import { View, Text } from 'react-native'
import React from 'react'
import AuthNevigation from './AuthNevigation'
import { NavigationContainer } from '@react-navigation/native';



const RootNevigation = () => {
  return (
    <NavigationContainer>
      <AuthNevigation></AuthNevigation>
    </NavigationContainer>
  )
}

export default RootNevigation

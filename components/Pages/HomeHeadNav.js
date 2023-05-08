import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const HomeHeadNav = () => {
  return (
    <View style={styles.container}>
      <Feather name="menu" size={23} color="black" />
      <FontAwesome5 name="hamburger" size={23} color="black" />
      <MaterialCommunityIcons name="account" size={23} color="black" />
    </View>
  )
}

export default HomeHeadNav


const styles = StyleSheet.create({
  container: {
      backgroundColor:'white',
      flexDirection : 'row',
      justifyContent : 'space-between'
     
    },
    text: {
      fontSize: 20,
      color: 'blue',
    }
})
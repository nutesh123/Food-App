import { View, Text , StyleSheet } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={stylss.tt}>
      <Text style={styles.tt}>about</Text>
    </View>
  )
}

const styles =StyleSheet.create({
    tt:{
        borderColor : 'pink',
        backgroundColor:'yellow'
    }

})

export default About
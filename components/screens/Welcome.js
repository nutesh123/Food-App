import { Text, StyleSheet, View , Image , Button , TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import AuthNevigation from '../Navegations/AuthNevigation'
import RootNevigation from '../Navegations/RootNevigation'


const Welcome = ({navigation}) => {
  return (
    <View style={styles.back}>
      <Text style={styles.text}>Welcome to foodCart </Text>
      <Image
        source={require('../../assests/boy.png.png')}
        style={styles.image}
      />
      <Button title='Login' onPress={()=>navigation.navigate('login')}></Button>
      <Button title='Signup' onPress={()=>navigation.navigate('signup')} ></Button>
      <TouchableOpacity>
        <Text>hiiii</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Welcome


const styles = StyleSheet.create({
  back:{
    backgroundColor:'red',
    flex : 1 ,
   
},

text : {
  fontSize : 30 ,
  color : 'white',
},

image: {
  width: 100,
  height: 100,
  alignSelf: 'center',
  marginTop: 102,
}

})
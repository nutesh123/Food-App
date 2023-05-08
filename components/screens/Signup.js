import { View, Text ,TextInput ,Button} from 'react-native'
import React from 'react'

const Signup = ({ navigation }) => {
  return (
    <View>
    <Text>Signup</Text>
    <TextInput placeholder='id'/>
    <TextInput placeholder='password'/>
    <TextInput placeholder='Confirmpassword'/>
    <Button title='signup'></Button>
    <Text>Already Have an account ? <Text  onPress={()=>navigation.navigate('login')}>Login</Text></Text>
  </View>
  )
}

export default Signup
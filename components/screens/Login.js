import { View, Text , TextInput , Button} from 'react-native'
import React from 'react'

const Login = ({ navigation }) => {
  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder='id'/>
      <TextInput placeholder='password'/>
      <Button title='login' onPress={()=>navigation.navigate('home')}></Button>
      <Text>Dont Have an account ? <Text  onPress={()=>navigation.navigate('signup')}>Signup</Text></Text>
    </View>
  ) 
}

export default Login
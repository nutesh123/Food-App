import { View, Text , StatusBar , TextInput , StyleSheet} from 'react-native'
import React from 'react'
import Categories from '../Pages/Categories'
import OfferSlider from '../Pages/OfferSlider'
import HomeHeadNav from '../Pages/HomeHeadNav'

const Home = () => {
  return (
    <View>
<StatusBar></StatusBar>
<HomeHeadNav></HomeHeadNav>
<TextInput placeholder='Search' style={styles.input} />
        <Categories></Categories>
        <OfferSlider></OfferSlider>
      
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginLeft: '5%',
    marginTop:10,
    borderRadius :10,
    }
})

export default Home
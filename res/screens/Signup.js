import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale as ms } from 'react-native-size-matters';
import mute from '../img/mute.png'
import volumeUp from '../img/volumeUp.png'
import leftArrow from '../img/leftArrow.png'
import coverImg from '../img/coverImg.jpg'

const Signup = ({navigation}) => {
  return (
    <View style={styles.containerMain}>
      <View style={styles.headerSection}>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Image source={leftArrow} style={styles.iconImg} />
        </TouchableOpacity>
        <Image source={mute} style={styles.iconImg} />
      </View>
      <Text style={styles.textCreateAnAccount}>Create an account</Text>
      <Image source={coverImg} style={styles.coverImg} />
      <Text style={styles.textStyle}>
        By continuing, you agree to Facebook's <Text style={{color:'#0064e0'}}> Terms</Text>, and acknowledge Facebook's
        <Text style={{color:'#0064e0'}}> Privacy Policy</Text> and <Text style={{color:'#0064e0'}}> Cookies Policy.</Text>
      </Text>
      <TouchableOpacity style={styles.acceptBtn}>
        <Text style={{color:'#FFF', fontSize:18,fontWeight:'bold', letterSpacing:0.5}}>Agree & Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.haveAccountBtn}>
        <Text style={{color:'#0064e0', fontSize:18,fontWeight:'bold', letterSpacing:0.5}}>I already have an account</Text>
      </TouchableOpacity>
      <Text >
        People who us our service may have uploaded your contact information to Facebook.
        <Text style={{color:'#0064e0'}}> Learn more</Text>
      </Text>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  containerMain: {
    //backgroundColor: '#000',
    flex: 1,
    paddingHorizontal: ms(20),
    paddingTop: Platform.OS === 'ios' ? 50 : 10
  },
  headerSection: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',

  },
  iconImg: {
    height: ms(24),
    width: ms(24)
  },
  textCreateAnAccount: {
    paddingVertical: ms(20),
    fontSize: ms(22),
    fontWeight: 'bold'
  },
  coverImg: {
    width: '100%',
    height: 190,
    borderRadius: 12
  },
  textStyle: {
fontSize:ms(13),
paddingVertical:ms(20),
letterSpacing:0.6,
lineHeight:ms(18)
  },
  acceptBtn:{
    borderWidth:1,
    borderColor:'#0064e0',
    backgroundColor:'#0064e0',
    height:ms(50),
    borderRadius:32,
    justifyContent:'center',
    alignItems:"center"
  },
  haveAccountBtn:{
    borderWidth:1,
    borderColor:'#0064e0',
    width:'100%',
    height:50,
    borderRadius:32,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:ms(15)
  }

})
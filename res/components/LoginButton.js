import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale as ms } from 'react-native-size-matters';

const button = () => {
  const{text} = props;
  return (
    <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default button

const styles = StyleSheet.create({
  buttonStyle:{
    backgroundColor:'#0165e0',
    height:ms(40),
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#0165e0',
    borderRadius:ms(32),
    borderWidth:1
  },
  text:{
    color:'#FFF',
    fontSize:ms(18),
  }
})
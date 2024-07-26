import { StyleSheet, Text, TextInput, View } from 'react-native'
import { scale, verticalScale, moderateScale as ms } from 'react-native-size-matters';
import React from 'react'

const InputBox = (props) => {
  const {placeholder, secureTextEntry} = props;
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} secureTextEntry={secureTextEntry} style={styles.input}/>
    </View>
  )
}

export default InputBox

const styles = StyleSheet.create({
    container:{
    },
    input:{
        height:ms(50),
        width:'100%',
        borderWidth:1,
        borderColor:'#adb0b2',
        paddingHorizontal:ms(15),
        paddingVertical:ms(10),
        borderRadius:ms(12),
        backgroundColor:'#FFF'
    }
})
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale as ms } from 'react-native-size-matters';

const CreateNewButton = ({navigation}) => {
  return (
    <TouchableOpacity style={styles.createNewButton} onPress={()=>navigation.navigate('Signup')}>
      <Text style={styles.text1}>Create new account</Text>
    </TouchableOpacity>
  )
}

export default CreateNewButton

const styles = StyleSheet.create({
    createNewButton:{
        height:ms(50),
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderRadius:ms(32),
        borderColor:'#356eb3'
    },
    text1:{
        color:'#356eb3',
        fontSize:18,

    }
})
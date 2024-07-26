import { Alert, Button, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import leftArrow from '../img/leftArrow.png'
import downArrow from '../img/downArrow.png'
import facebook from '../img/facebook.png'
import { scale, verticalScale, moderateScale as ms } from 'react-native-size-matters';
import InputBox from '../components/InputBox';
import LoginButton from '../components/LoginButton'
import CreateNewButton from '../components/CreateNewButton'
import meta from '../img/meta.png'

const Login = ({ navigation }) => {

    const [userId, setUserId] = useState();
    const alert = () => {
        Alert.alert('Pressed');
    }
    return (
        <View style={styles.containerMain}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => Alert.alert('are you sure')}>
                    <Image source={leftArrow} style={styles.leftArrowImage} />
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} onPress={() => Alert.alert('Only support US english')}>

                    <Text>English (US)</Text>
                    <Image source={downArrow} style={styles.downArrowImage} />
                </TouchableOpacity>
                <View style={styles.containerFacebook}>
                    <Image source={facebook} style={styles.facebookLogo} />
                </View>
                <View>
                    <InputBox placeholder='Mobile number or email' />
                    <View style={styles.spacerVh} />
                    <InputBox placeholder='Password' secureTextEntry={true} />
                    <View style={styles.spacerVh} />
                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={styles.text}>Log in</Text>
                    </TouchableOpacity>
                    <View style={styles.spacerVh} />
                    <View style={styles.spacerVh} />
                </View>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Forget password ?</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.createNewButton} onPress={() => navigation.navigate('Signup')}>
                        <Text style={styles.text2}>Create new account</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: ms(5), marginVertical: ms(10) }}>
                        <Image source={meta} style={styles.metaImg} />
                        <Text style={{ fontSize: ms(18) }}>Meta</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    leftArrowImage: {
        height: ms(24),
        width: ms(24)
    },
    containerMain: {
        flex: 1,
        paddingHorizontal: ms(20),
        marginTop: Platform.OS == 'ios' ? 50 : 20,
        //backgroundColor:'#000',
    },
    downArrowImage: {
        height: ms(18),
        width: ms(18)
    },
    facebookLogo: {
        height: ms(60),
        width: ms(60),

    },
    containerFacebook: {
        width: '100%',
        //backgroundColor:'#000',
        alignItems: 'center',
        marginVertical: ms(70)
    },
    spacerVh: {
        height: ms(15)
    },
    bottomContainer: {
        bottom: 1,
        alignItems: 'center',
        minWidth: '100%',
        height: verticalScale(100),
        //  backgroundColor:'#000',
        position: 'absolute',
        flex: 1,
    },
    metaImg: {
        height: ms(30),
        width: ms(30)
    },
    buttonStyle: {
        backgroundColor: '#0165e0',
        height: ms(40),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#0165e0',
        borderRadius: ms(32),
        borderWidth: 1
    },
    text: {
        color: '#FFF',
        fontSize: ms(18),
    },
    createNewButton:{
        height:ms(50),
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderRadius:ms(32),
        borderColor:'#356eb3'
    },
    text2:{
        color:'#356eb3',
        fontSize:18,

    }
})
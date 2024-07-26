import { Alert, Button, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import leftArrow from '../img/leftArrow.png'
import downArrow from '../img/downArrow.png'
import facebook from '../img/facebook.png'
import { scale, verticalScale, moderateScale as ms } from 'react-native-size-matters';
import InputBox from '../components/InputBox';
import LoginButton from '../components/LoginButton'
import CreateNewButton from '../components/CreateNewButton'
import meta from '../img/meta.png'

const Login = () => {
    return (
        <View style={styles.containerMain}>
            <View style={{flex:1}}>
            <TouchableOpacity onPress={() => Alert.alert('are you sure')}>
                <Image source={leftArrow} style={styles.leftArrowImage} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                <Text>English (US)</Text>
                <Image source={downArrow} style={styles.downArrowImage} />
            </TouchableOpacity>
            <View style={styles.containerFacebook}>
                <Image source={facebook} style={styles.facebookLogo} />
            </View>
            <View>
                <InputBox placeholder='Mobile number or email' />
                <View style={styles.spacerVh} />
                <InputBox placeholder='Password' secureTextEntry={true}/>
                <View style={styles.spacerVh} />
                <LoginButton text="Log in"/>
                <View style={styles.spacerVh} />
                <View style={styles.spacerVh} />
            </View>
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text>Forget password ?</Text>
            </View>
            <View style={styles.bottomContainer}>
                <CreateNewButton />
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:ms(5)}}>
                    <Image source={meta} style={styles.metaImg} />
                    <Text style={{fontSize:ms(18)}}>Meta</Text>
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
        paddingHorizontal:ms(20),
        marginTop:ms(20),
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
        bottom:1,
        alignItems: 'center',
        minWidth: '100%',
        justifyContent: 'space-around',
        height: verticalScale(100),
       // backgroundColor:'#000',
        position:'absolute',
        flex:1
    },
    metaImg: {
        height: ms(30),
        width: ms(30)
    }
})
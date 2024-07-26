import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Singup from '../screens/Singup';

const Nav = () => {
  
    const Stack = createNativeStackNavigator();
  
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='login'>
            <Stack.Screen name='login' component={Login}/>
            <Stack.Screen name='Signup' component={Singup}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Nav

const styles = StyleSheet.create({})
import * as React from 'react';
import { View, Text } from 'react-native';
//import {  createAppContainer, createSwitchNavigator } from 'react-navigation'
//import { createStackNavigator } from 'react-navigation-stack'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';


import homeScreen from './../Screens/homeScreen';
import detailScreen from './../Screens/detailScreen';

const Stack = createStackNavigator();


export default class homeDetails extends React.Component{



    render(){

        return(

            <NavigationContainer>

                <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>

                    <Stack.Screen name='Home' component={homeScreen} initialParams={{ user: this.props.user,pass:this.props.pass }} />
                    <Stack.Screen name='Detail' component={detailScreen} initialParams={{ user: this.props.user,pass:this.props.pass }} />

                </Stack.Navigator>

            </NavigationContainer>

        );

    }



}
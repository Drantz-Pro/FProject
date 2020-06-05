import * as React from 'react';
import { View, Text } from 'react-native';
//import {  createAppContainer, createSwitchNavigator } from 'react-navigation'
//import { createStackNavigator } from 'react-navigation-stack'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import loginScreen from './Screens/loginScreen';
import registerScreen from './Screens/registerScreen';
import homeScreen from './Screens/homeScreen';
import detailScreen from './Screens/detailScreen';

/*const authStack = createStackNavigator({
  login:{
    screen: loginScreen,
    navigationOptions:{
      header: null,
    }
  },
  register:{
    screen: registerScreen,
    navigationOptions:{
      headerShown:false
    }
  },
})

const appStack = createStackNavigator({
  home:homeScreen,
  detail:detailScreen
})


export default createAppContainer(

  createSwitchNavigator({
    Auth:authStack,
    app:appStack
  },
  {
    initialRouteName:'Auth'
  }
  )

)
*/

const Stack = createStackNavigator();

//const appStack = createStackNavigator();

export default class app extends React.Component{


  render(){
    return(

      <NavigationContainer>

        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}} >

        <Stack.Screen name="Login" component={loginScreen} />
        <Stack.Screen name="Register" component={registerScreen} />
        <Stack.Screen name='Home' component={homeScreen}initialParams={{ user: '',pass:'' }} />
        <Stack.Screen name='Details' component={detailScreen} />

       </Stack.Navigator>

    </NavigationContainer>
    );
  }


}



      //<Stackk.Navigator>
     // <Stack.Screen name = 'home' component={homeScreen} />
     // <Stack.Screen name= 'details' component={detailScreen} />
   // </Stackk.Navigator>

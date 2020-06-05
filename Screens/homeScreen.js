import React, {Component} from 'react';
import { Text, View ,Button } from 'react-native';

export default class registerScreen extends React.Component{

    constructor(props){
        super(props)
        console.log(props.user)
    }

    render(){

        return(
            <View>
                <Text>HomeScreen</Text>
                <Button
                title='asdfasf'
                onPress={() => this.props.navigation.navigate('Login')}
                />
            </View>
        )
    }
}
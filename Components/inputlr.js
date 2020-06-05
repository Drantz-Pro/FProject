import React, {Component} from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { eachSeries } from 'async';
import { Value } from 'react-native-reanimated';

export default class inputlr extends React.Component{

    constructor(props){
        super(props)

        state={
             content:'',
             placeh:props.holder,
        }
    }

    handleChange=(text)=>{
        this.setState({content: text})
    }


    changeContent= (text) => {

    }

    render(){

        return(
            <View>
                <TextInput
                    placeholder={this.state.placeh}
                    onChangeText = {this.handleChange}
                />
            </View>
        )
    }
}

const style = StyleSheet.create({

    input:{
        backgroundColor:'white',
    }

})
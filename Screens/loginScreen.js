import React, {Component} from 'react';
import {Text, View , Button, TextInput, StyleSheet,TouchableHighlight} from 'react-native';

export default class loginScreen extends Component{


    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
    }

  /*  usernameMount = (user) => {
        this.setState({username : user})
    }
    passwordMount = (pass) => {
        this.setState({password : pass})
    }
*/
  //  {user:this.state.username, pass:this.state.password}

    render(){

        return(
            <View>
                <View  style={style.container} >
                    <Text style={style.appName} >App name</Text>

                    <Text style={style.logotemp}>Logo</Text>

                </View>

                <View style={style.container} >
                    <TextInput style={style.inputl}
                      placeholder='Username'
                     onChangeText={user => this.setState({username: user})} value={this.state.username}
                    />

                    <TextInput style={style.inputl}
                        placeholder='Password'
                        onChangeText= {pass => this.setState({password: pass})} value={this.state.password}
                    />

                    <TouchableHighlight>
                        <Text style={style.buton} onPress={()=>{this.props.navigation.navigate('Homes',{user:this.state.username, pass:this.state.password})}} >
                            Login
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Text style={style.butonn} >
                            Register
                        </Text>
                    </TouchableHighlight>
                </View>

            </View>
        );
    }
}

const style = StyleSheet.create({

    container:{
        height: '50%',
        backgroundColor:'red',
        alignItems:'center',
       // justifyContent: 'center',
    },

    buton:{
        borderWidth: 1,
        paddingHorizontal:35,
        borderColor: 'black',
        backgroundColor: 'white',
        margin: 15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:25
    },
    butonn:{
        borderWidth: 1,
        paddingHorizontal:40,
        borderColor: 'black',
        backgroundColor: 'white',
        paddingVertical:10,
        borderRadius:10,
    },

    appName:{
        fontSize:45 ,
        color:'white',
        marginBottom:10,
        marginTop:40
    },
    inputl:{
        backgroundColor:'white',
        margin:5,
        borderRadius:5,
        width:250,
        alignItems:'center',
        textAlign: 'center',
        height:'10%'

    },
    logotemp:{
        margin:15,
        backgroundColor:'white',
        padding:50,
        borderRadius:100,
        marginTop:40
    }

})



//<Button
//title='Ingresar'
//onPress={() => this.props.navigation.navigate('home')}
//style={style.buton}
///>

//<Button
// title='Registrarse'
 //onPress={() => this.props.navigation.navigate('register')}
// buttonStyle={style.buton}
///>
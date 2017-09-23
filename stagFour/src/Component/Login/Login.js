import React, { Component } from 'react';
import Button from '../../Tags/Button';
import Header from '../../Tags/Header';
// import Input from '../../Tags/Input';
import { connect } from 'react-redux';
import Middleware from '../../Store/Middleware/Middleware';
import { Container, Content, Card, CardItem, Input, Footer } from 'native-base';
import { View, Text, AsyncStorage, Image, StyleSheet, TextInput } from "react-native"


function mapDispatchToProp(dispatch) {
    return {
        loginUser: (props, doctor) => {
            dispatch(Middleware.loginUser(props, doctor))
        }
    }
}
function mapStateToProp(state) {
    return {

       // storeState: state
    }
}



class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            pass: '',
            users: []
        }
    }
    static navigationOptions = {
        title: 'Login Page',
        header: null,
    }

    componentWillMount() {
        console.disableYellowBox = true;
        AsyncStorage.getItem('Patient App', (err, result) => {
            if (result !== null) {
                let data = JSON.parse(result)
                var email = data.email
                var pass = data.pass
                firebase.auth().signInWithEmailAndPassword(email, pass)
                    .then((user) => {
                        this.props.navigation.navigate('tabnavigation')
                    })
            }
        })
    }

    LoginUserMethod = () => {
        if (this.state.email == '' || this.state.pass == '') {
            alert('Enter Email and Password !')
        }
        else {

            var email = this.state.email;
            var pass = this.state.pass;

            var doctor = {
                email: email,
                pass: pass,
            }
            this.props.loginUser(this.props, doctor)
        }
    }

    render() {
        return (
            <Image source={require('../../Images/1.jpg')} style={styles.bgImage}>
            <Container style={styles.container}>
                <Content style={{ width: 240, marginTop: 200 }} >
                    <TextInput
                        style={{ height: 40, color: '#000' }}
                        placeholder="Email Address"
                        placeholderTextColor="white"
                        onChangeText={(email) => this.setState({ email })}
                        underlineColorAndroid='#fff'
                        required
                    />
                    <TextInput
                        style={{ height: 40, color: '#000' }}
                        placeholder="Password"
                        placeholderTextColor="white"
                        onChangeText={(pass) => this.setState({ pass })}
                        underlineColorAndroid='#fff'
                        secureTextEntry={true}
                    />
                    <Button block rounded style={{ marginTop: 20, backgroundColor: 'rgba(255,255,255, 0.3 )', padding: 10, width: 240 }} onPress={this.LoginUserMethod}>
                        <Text style={{ color: '#fff', }} >Login</Text>
                    </Button>
                    <Text style={{ color: '#fff', fontSize: 12, textAlign: 'center', marginTop: 10 }}> Forgot your login details?<Text style={{ fontWeight: 'bold', }}> Get login help.</Text> </Text>
                </Content>
                <Footer style={{ height: 100 }}>
                    <Button block rounded style={{ backgroundColor: 'rgba(45,92,227, 0.7 )', padding: 10, width: 240 }} onPress={() => { this.props.navigation.navigate('signup') }}>
                        <Text style={{ color: '#fff', }} >Create an account </Text>
                    </Button>
                </Footer>

            </Container>
            </Image>
        )
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(Login)

const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        resizeMode: 'stretch',

    }
})
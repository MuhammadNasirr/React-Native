import React, { Component } from 'react';
import { Container, Header, Title, Button, Content, Form, Icon, Item, Input, Label, Footer } from 'native-base';
import { View, Text, AsyncStorage, Image, StyleSheet, TextInput } from "react-native"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { email: '', pass: '' }
    }
    static navigationOptions = {
        title: 'Logn page',
        Header: null
    }
    componentWillMount() {
        console.disableYellowBox = true;
        AsyncStorage.getItem('users', (err, result) => {
            if (result !== null) {
                let data = JSON.parse(result);
                this.setState({ user: data })
            }
        })
    }

    loginCheck = () => {
        var userExist = false;
        var users = this.state.user;

        for (var i = 0; i < users.length; i++) {
            if (users[i].email === this.state.email && users[i].pass === this.state.pass) {
                userExist = true
            }

        }
        if (userExist === true) {
            console.log('User Successfully Login !')
            this.props.navigation.navigate('tabsRoute')
        }
        else {
            console.log('Login Failed !')
        }
    }

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input onChangeText={(email) => this.setState({ email })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input onChangeText={(pass) => this.setState({ pass })} />
                        </Item>
                            <Button title="Log-In" onPress={() => { this.props.navigation.navigate('homeRoute') }}></Button>
                            <hr/>
                            <Button title="Create an account" onPress={() => { this.props.navigation.navigate('route') }}></Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}
export default Login
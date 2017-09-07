import React, { Component } from 'react';
import { Container, Header, Title, Button, Content, Form, Icon, Item, Input, Label, Footer } from 'native-base';
import { View, Text, AsyncStorage, Image, StyleSheet, TextInput } from "react-native"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { email: '', pass: '' }
    }
    static navigationOptions = {
        title: 'Patient App',
        Header: null
    }
    // componentWillMount() {
    //     console.disableYellowBox = true;
    //     AsyncStorage.getItem('users', (err, result) => {
    //         if (result !== null) {
    //             let data = JSON.parse(result);
    //             this.setState({ user: data })
    //         }
    //     })
    // }

    // loginCheck = () => {
    //     var userExist = false;
    //     var users = this.state.user;

    //     for (var i = 0; i < users.length; i++) {
    //         if (users[i].email === this.state.email && users[i].pass === this.state.pass) {
    //             userExist = true
    //         }

    //     }
    //     if (userExist === true) {
    //         console.log('User Successfully Login !')
    //         this.props.navigation.navigate('tabsRoute')
    //     }
    //     else {
    //         console.log('Login Failed !')
    //     }
    // }

    render() {
        return (
            <Image source={require('../../Images/1.jpg')} style={styles.BckGrndImg}>
                <Container>
                    <Content>
                    <Button block rounded style={{ backgroundColor: 'rgba(100,0,227, 1 )', marginTop:250, padding: 10, width: 240 }} onPress={() => { this.props.navigation.navigate('tabsRoute') }}>
                            <Text style={{ color: '#fff', }} >Let's Start </Text>
                        </Button>
                    {/* <Form>
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
                    </Form> */}
                </Content>

                </Container>
            </Image  >
        )
    }
}
export default Login

const styles = StyleSheet.create({
    BckGrndImg: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
    }
})
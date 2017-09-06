import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { View, Text, Button } from "react-native"




class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '', pass: '' }

    }

    static navigationOptions = {
        title: 'Login Page',
    }


    loginCheck = () => {

        console.log("dadadadad");

        const email = this.state.email;
        const pass = this.state.pass;

        var abc = {}
        var obj = {
            email: email,
            pass: pass,
        }
        abc['users'] = obj;

        console.log(abc);
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
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input onChangeText={(pass) => this.setState({ pass })} />
                        </Item>
                    </Form>
                    <Button title="Patient Route" onPress={() => { this.props.navigation.navigate('patientRoute') }}></Button>
                    <Button title="Create an account" onPress={() => { this.props.navigation.navigate('route') }}></Button>
                </Content>

            </Container>

        )
    }
}
export default HomePage;

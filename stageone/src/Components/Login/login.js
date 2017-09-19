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
    render() {
        return (
            <Image source={require('../../Images/2.jpg')} style={styles.BckGrndImg}>
                <Container>
                    <Content>
                    <Button block style={{ backgroundColor: 'rgba(48,108,86, 1 )', marginTop:500, padding: 10, width: 275, borderRadius:6 }} onPress={() => { this.props.navigation.navigate('tabsRoute') }}>
                            <Text style={{ color: '#fff', }} >Let's Start </Text>
                        </Button>
                
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
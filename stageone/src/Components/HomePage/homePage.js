import React, { Component } from 'react'
import { View, Text, Button, DrawerLayoutAndroid, Image, StyleSheet } from "react-native";
import { Container, Header, Content, List, ListItem, Icon, Left, Body, Right, Switch } from "native-base";
import PatientRegForm from '../PatientRegForm/patientRegForm';




class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '', pass: '' }

    }

    static navigationOptions = {
        title: 'Home',
        Header: null
    }


    // loginCheck = () => {

    //     console.log("dadadadad");

    //     const email = this.state.email;
    //     const pass = this.state.pass;

    //     var abc = {}
    //     var obj = {
    //         email: email,
    //         pass: pass,
    //     }
    //     abc['users'] = obj;

    //     console.log(abc);
    // }

    render() {
        return (

            <View>
                <List>
                    <ListItem icon>
                        <Left>
                            <Icon name="plane" />
                        </Left>
                        <Body>
                            <Text>Airplane Mode</Text>
                        </Body>
                        <Right>
                            <Switch value={false} />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="wifi" />
                        </Left>
                        <Body>
                            <Text>Wi-Fi</Text>
                        </Body>
                        <Right>
                            <Text>GeekyAnts</Text>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="bluetooth" />
                        </Left>
                        <Body>
                            <Text>Bluetooth</Text>
                        </Body>
                        <Right>
                            <Text>On</Text>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                </List>
            </View>

        )
    }
}
export default HomePage;



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
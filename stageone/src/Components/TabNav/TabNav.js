import React, { Component } from 'react';
import { View, Text, Button, DrawerLayoutAndroid, Image, StyleSheet } from "react-native";
import {
    Container,
    Header,
    Content, Form,
    Item, Input,
    Label, ListItem,
    List, Left,
    Body, Right,
    Thumbnail, InputGroup,
    Icon,
    Tabs,
    Tab, TabHeading,
} from 'native-base';
import PatientList from '../PatientList/patientList'
import PatientRegForm from '../PatientRegForm/patientRegForm';

class TabNav extends Component {
    constructor(props) {
        super(props)
        this.state = { email: '', pass: '' }
    }
    static navigationOptions = {
        title: 'Patient App',
        Header: null
    }
    
    render() {
        console.disableYellowBox = true;
        return (
            <Container>
                <Content>
                    <Tabs>
                        <Tab heading={<TabHeading><Icon name="person" /><Text style={{ color: '#fff', }}> Patients</Text></TabHeading>} >
                            <PatientList />
                        </Tab>
                        <Tab heading={<TabHeading><Icon name="logo-buffer" /><Text style={{ color: '#fff' }}> Reg Form</Text></TabHeading>}>
                            <PatientRegForm />
                        </Tab>
                    </Tabs>
                </Content>
            </Container>
        )
    }
}

export default TabNav;


const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
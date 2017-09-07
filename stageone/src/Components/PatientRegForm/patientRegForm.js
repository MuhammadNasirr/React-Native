import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Card, CardItem, Body, Button, Toast } from 'native-base';
import { View, Text, AsyncStorage, StyleSheet, Image } from "react-native"


class PatientRegForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patientname:'',
            desease:'',
            medication:'',
            cost:'',
            date:'',
        }
    }
    static navigationOptions = {
        title: 'Patient Registration Form',
    }

}
export default PatientRegForm;
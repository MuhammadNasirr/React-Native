import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Card, CardItem, Body, Button, Toast } from 'native-base';
import { View, Text, AsyncStorage, StyleSheet, Image } from "react-native";
import Hr from 'react-native-hr';
import DatePicker from 'react-native-datepicker'




class PatientRegForm extends Component {
    constructor(props) {
        super(props);
        var today = new Date();
        var todayDate = today.toISOString().substring(0, 10);
        this.state = {
            patientname: '',
            desease: '',
            medication: '',
            cost: '',
            date: todayDate,
            patient: [],
        }
    }
    static navigationOptions = {
        title: 'Patient Registration Form',
        Header: null,
    }
    componentWillMount() {
        console.desableYellowBox = true,
            AsyncStorage.getItem('nasir', (err, result) => {
                if (result !== null) {
                    let data = JSON.parse(result);
                    this.setState({ patient: data })
                    console.log(this.state.patient, 'asdasdasd');
                }
            })
    }
    addPatient = () => {
        var patients = this.state.patient;
        if (this.state.patientname === '' || this.state.desease === '' || this.state.medication === '' || this.state.cost === '') {
            console.log(this.props, "props")
            Toast.show({
                text: 'Please fill form!',
                position: 'bottom',
                buttonText: 'Okay',
            });
        }
        else {
            var obj = {
                patientname: this.state.patientname,
                desease: this.state.desease,
                medication: this.state.medication,
                cost: this.state.cost,
                date: this.state.date,
            }
            console.log(obj);
            patients.push(obj)
            console.log(patients);
            AsyncStorage.setItem('nasir', JSON.stringify(patients));
            Toast.show({
                text: 'Patient has been added!',
                position: 'bottom',
                buttonText: 'Okay'
            })
            this.setState({
                patientname: '',
                desease: '',
                medication: '',
                cost: '',

            })
        }
    }
    render() {
        return (
            <View>
                <Card style={{ width: 300, marginTop: '10%',marginLeft: '12%' }}>
                    <CardItem>
                        <Body>
                            <Hr lineColor='#b3b3b3' text='Registration Form' textColor='steelblue'
                                textStyle={{
                                    color: "red",
                                    height: 20,

                                }} />
                            <Item floatingLabel style={{ marginTop: 10 }}>
                                <Label>Patient Name</Label>
                                <Input required onChangeText={(patientname) => this.setState({ patientname })} value={this.state.patientname} />
                            </Item>
                            <Item floatingLabel style={{ marginTop: 10 }}>
                                <Label>Diseases</Label>
                                <Input onChangeText={(desease) => this.setState({ desease })} value={this.state.desease} />
                            </Item>
                            <Item floatingLabel style={{ marginTop: 10 }}>
                                <Label>Medication Provide</Label>
                                <Input onChangeText={(medication) => this.setState({ medication })} value={this.state.medication} />
                            </Item>
                            <Item floatingLabel style={{ marginTop: 10 }}>
                                <Label>Cost</Label>
                                <Input onChangeText={(cost) => this.setState({ cost })} value={this.state.cost} />
                            </Item>
                            <DatePicker
                                style={{ width: '100%', marginTop: 20 }}
                                date={this.state.date}
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 36
                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(date) => { this.setState({ date: date }) }}
                            />
                            <Button block rounded style={{ backgroundColor: 'rgba(45,92,227, 0.7 )', marginLeft: '15%', marginTop: 20, width: '70%' }} onPress={this.addPatient}>
                                <Text style={{ color: '#fff', }} >Patient Registration</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
            </View >
        )
    }
}
export default PatientRegForm;

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
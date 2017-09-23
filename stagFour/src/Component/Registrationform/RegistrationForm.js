import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Card, CardItem, Body, Button, Toast } from 'native-base';
import { View, Text, AsyncStorage, StyleSheet, Image } from "react-native";
import DatePicker from 'react-native-datepicker';
import Hr from 'react-native-hr';


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
            showToast: false
        }
    }
    static navigationOptions = {
        Header: null,
    }
    componentWillMount() {
        console.desableYellowBox = true,
            AsyncStorage.getItem('abc', (err, result) => {
                if (result !== null) {
                    let data = JSON.parse(result);
                    this.setState({ patien: data })
                    console.log(this.state.patient, 'hello');
                }
            })
    }
    addPatient = () => {
        var patients = this.state.patient;
        if (this.state.patientname == '' || this.state.desease == '' || this.state.medication == '' || this.state.cost == '') {
            console.log(this.props, "props")
            alert("Please fill form!")
      
        }
        else {
            var obj = {
                patientname: this.state.patientname,
                desease: this.state.desease,
                medication: this.state.medication,
                cost: this.state.cost,
                date: this.state.date,
            }
            patients.push(obj)
            console.log(patients);
            AsyncStorage.setItem('abc', JSON.stringify(patients));
            alert("Patient has been added!")
          
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
            <View >
                <Card style={{ width: 300, marginTop: '10%', marginLeft: '12%' }}>
                    <CardItem>
                        <Body>
                            <Hr textColor='#306C56' lineColor='#306C56' text='Registration Form'
                                textStyle={{
                                    color: "green",
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
                                }}
                                onDateChange={(date) => { this.setState({ date: date }) }}
                            />
                            <Button block style={{ backgroundColor: 'rgba(48,108,86, 1 )', marginLeft: '15%', marginTop: 20, width: '70%', borderRadius: 6 }} onPress={this.addPatient}>
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
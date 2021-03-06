import React, { Component } from 'react'
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
    Tab, TabHeading
} from 'native-base';

import { View, Text, Button, TextInput, AsyncStorage, Image, StyleSheet } from "react-native"
import DatePicker from 'react-native-datepicker'

class PatientList extends Component {
    constructor(props) {
        super(props);
        var today = new Date();
        var todayDate = today.toISOString().substring(0, 10);
        this.state = { email: '', pass: '', patients: [], search: '', date: todayDate, }
    }

    static navigationOptions = {
        title: 'Patients',
        header: null,
    }
    componentWillMount() {
        console.disableYellowBox = true;

        AsyncStorage.getItem('abc', (err, result) => {
            if (result !== null) {
                let data = JSON.parse(result);
                this.setState({ patients: data });
                console.log(this.state.patients, 'aasdsdasd');
            }
        });
        this.setState({ date: '' })
        console.log(this.state.date)
    }
    componentWillReceiveProps() {
        AsyncStorage.getItem('abc', (err, result) => {
            if (result !== null) {
                let data = JSON.parse(result);
                this.setState({ patients: data });
                console.log(this.state.patients);
            }
        });
        this.setState({ date: '' })
        console.log(this.state.date)
    }
    render() {

        let patientsbyName = this.state.patients.filter((patient) => {
            return (
                patient.patientname.toLocaleLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1
            )
        });

        let patientsbyDate = this.state.patients.filter((patient) => {
            return (
                patient.date.toLocaleLowerCase().indexOf(this.state.date.toLocaleLowerCase()) !== -1
            )
        });
        return (
            <View >
                <Tabs>
                    <Tab heading={<TabHeading><Icon name="ios-search-outline" /><Text style={{ color: '#fff' }}> Search by Name</Text></TabHeading>} >
                        <Header searchBar rounded>
                            <Item>
                                <Icon name="ios-search" />
                                <Input placeholder="Search...." style={{ marginTop: 10 }} onChangeText={(search) => this.setState({ search })} />
                                <Icon name="ios-people" />
                            </Item>
                        </Header>
                        <List>
                            {
                                patientsbyName.map((pat, i) => {
                                    return (<ListItem avatar key={i}>
                                        <Left>
                                            <Image
                                                style={{ width: 50, height: 50 }}
                                                source={{ uri: 'https://cdn.pixabay.com/photo/2016/03/31/20/12/doctor-1295581_960_720.png' }}
                                            />
                                        </Left>
                                        <Body>
                                            <Text>{pat.patientname}</Text>
                                            <Text note>Diseases: {pat.disease}</Text>
                                        </Body>
                                        <Right>
                                            <Text note>{pat.date}</Text>
                                        </Right>
                                    </ListItem>
                                    )
                                })
                            }
                        </List>
                    </Tab>
                    <Tab heading={<TabHeading><Icon name="md-calendar" /><Text style={{ color: '#fff' }}> Search by Date</Text></TabHeading>} >
                        <Header searchBar rounded>
                            <Item>
                                <DatePicker
                                    style={{ width: '90%' }}
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
                                    onDateChange={(d) => { this.setState({ date: d }) }}
                                />
                                <Icon name="ios-search" />
                            </Item>
                        </Header>
                        <List>
                            {
                                patientsbyDate.map((pat, i) => {
                                    return (<ListItem avatar key={i}>
                                        <Left>
                                            <Image
                                                style={{ width: 50, height: 50 }}
                                                source={{ uri: 'https://cdn.pixabay.com/photo/2016/03/31/20/12/doctor-1295581_960_720.png' }}
                                            />
                                        </Left>
                                        <Body>
                                            <Text>{pat.patientname}</Text>
                                            <Text note>Diseases: {pat.disease}</Text>
                                        </Body>
                                        <Right>
                                            <Text note>{pat.date}</Text>
                                        </Right>
                                    </ListItem>
                                    )
                                })
                            }
                        </List>
                    </Tab>
                </Tabs>
            </View>
        )
    }
}
export default PatientList;
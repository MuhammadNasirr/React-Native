import React, { Component } from 'react';
import { connect } from "react-redux";
import Middleware from '../../Store/Middleware/Middleware';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import {
    Container, Header, Content, List, ListItem, Left,
    Body, Segment, Right, Thumbnail, Item, Input, Icon,
    Button, InputGroup,
    Tab, TabHeading
} from 'native-base';
import Tabs from 'react-native-tabs';
import DatePicker from 'react-native-datepicker';

function mapDispatchToProps(dispatch) {
    return {
        allPatient: (docID) => dispatch(Middleware.allPatient(docID))

    }
}
function mapStateToProps(state) {
    return {

        patients: state.patients.patient
    }
}

class PatientList extends Component {
    constructor(props) {
        super(props);
        var today = new Date();
        var todayDate = today.toISOString().substring(0, 10);
        this.state = { page: 'second', search: '', date: todayDate, }
    }

    static navigationOptions = {
        title: 'Patients',
        header: null,
    }
    componentWillMount() {
        console.disableYellowBox = true;

        AsyncStorage.getItem('xyz', (err, result) => {
            if (result !== null) {
                let data = JSON.parse(result);
                var abc = data._id;
                this.props.allPatient(abc);
            }
        });
        // this.setState({ date: '' })
        // console.log(this.state.date)
    }
    // componentWillReceiveProps() {
    //     AsyncStorage.getItem('abc', (err, result) => {
    //         if (result !== null) {
    //             let data = JSON.parse(result);
    //             this.setState({ patients: data });
    //             console.log(this.state.patients);
    //         }
    //     });
    //     this.setState({ date: '' })
    //     console.log(this.state.date)
    // }
    render() {
        let patientsbyName = this.props.patients.filter((patient) => {
            return (
                patient.patientname.toLocaleLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1
            )
        });

        // let patientsbyDate = this.state.patients.filter((patient) => {
        //     return (
        //         patient.date.toLocaleLowerCase().indexOf(this.state.date.toLocaleLowerCase()) !== -1
        //     )
        // });
        return (
            <Container>
            <View>
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
                                    <Thumbnail
                                        style={{ width: 50, height: 50 }}
                                        source={{ uri: 'https://www.arthrosurface.com/wp-content/uploads/2013/05/SurgeonPatient.png' }}
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
                {/* <List>

                    {
                        patientsbyDate.map((pat, i) => {
                            return (<ListItem avatar key={i}>
                                <Left>
                                    <Thumbnail
                                        style={{ width: 50, height: 50 }}
                                        source={{ uri: 'https://www.arthrosurface.com/wp-content/uploads/2013/05/SurgeonPatient.png' }}
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
                </List> */}

            </View>
        </Container>
            // <Container>
            //     <View >
            //         <Tabs>
            //             <Tab heading={<TabHeading><Icon name="ios-search-outline" /><Text style={{ color: '#fff' }}> Search by Name</Text></TabHeading>} >
            //                 <Header searchBar rounded>
            //                     <Item>
            //                         <Icon name="ios-search" />
            //                         <Input placeholder="Search...." style={{ marginTop: 10 }} onChangeText={(search) => this.setState({ search })} />
            //                         <Icon name="ios-people" />
            //                     </Item>
            //                 </Header>
            //                 <List>
            //                     {
            //                         patientsbyName.map((pat, i) => {
            //                             return (<ListItem avatar key={i}>
            //                                 <Left>
            //                                     <Image
            //                                         style={{ width: 50, height: 50 }}
            //                                         source={{ uri: 'https://cdn.pixabay.com/photo/2016/03/31/20/12/doctor-1295581_960_720.png' }}
            //                                     />
            //                                 </Left>
            //                                 <Body>
            //                                     <Text>{pat.patientname}</Text>
            //                                     <Text note>Diseases: {pat.disease}</Text>
            //                                 </Body>
            //                                 <Right>
            //                                     <Text note>{pat.date}</Text>
            //                                 </Right>
            //                             </ListItem>
            //                             )
            //                         })
            //                     }
            //                 </List>
            //             </Tab>
            //             <Tab heading={<TabHeading><Icon name="md-calendar" /><Text style={{ color: '#fff' }}> Search by Date</Text></TabHeading>} >
            //                 <Header searchBar rounded>
            //                     <Item>
            //                         <DatePicker
            //                             style={{ width: '90%' }}
            //                             date={this.state.date}
            //                             mode="date"
            //                             placeholder="select date"
            //                             format="YYYY-MM-DD"
            //                             confirmBtnText="Confirm"
            //                             cancelBtnText="Cancel"
            //                             customStyles={{
            //                                 dateIcon: {
            //                                     position: 'absolute',
            //                                     left: 0,
            //                                     top: 4,
            //                                     marginLeft: 0
            //                                 },
            //                                 dateInput: {
            //                                     marginLeft: 36
            //                                 }
            //                                 // ... You can check the source to find the other keys.
            //                             }}
            //                             onDateChange={(d) => { this.setState({ date: d }) }}
            //                         />
            //                         <Icon name="ios-search" />
            //                     </Item>
            //                 </Header>
            //                 <List>
            //                     {
            //                         patientsbyDate.map((pat, i) => {
            //                             return (<ListItem avatar key={i}>
            //                                 <Left>
            //                                     <Image
            //                                         style={{ width: 50, height: 50 }}
            //                                         source={{ uri: 'https://cdn.pixabay.com/photo/2016/03/31/20/12/doctor-1295581_960_720.png' }}
            //                                     />
            //                                 </Left>
            //                                 <Body>
            //                                     <Text>{pat.patientname}</Text>
            //                                     <Text note>Diseases: {pat.disease}</Text>
            //                                 </Body>
            //                                 <Right>
            //                                     <Text note>{pat.date}</Text>
            //                                 </Right>
            //                             </ListItem>
            //                             )
            //                         })
            //                     }
            //                 </List>
            //             </Tab>
            //         </Tabs>
            //     </View>
            // </Container>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PatientList)

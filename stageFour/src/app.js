import React, { Component } from 'react'
import * as firebase from "firebase";
import { View, Text } from "react-native"
import Naviagte from "./nav"
import { Container, Header, Root } from 'native-base'
import store from './store/';
import { Provider } from 'react-redux';

var config = {
    apiKey: "AIzaSyC-FrItAF4ZHdbdYn7if7R9nCH1_70EWY0",
    authDomain: "patient-tracker-452ec.firebaseapp.com",
    databaseURL: "https://patient-tracker-452ec.firebaseio.com",
    projectId: "patient-tracker-452ec",
    storageBucket: "patient-tracker-452ec.appspot.com",
    messagingSenderId: "494635982187"
  };
  firebase.initializeApp(config);
  
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root>
                    <Naviagte />
                </Root>
            </Provider>
        )
    }
}
export default App
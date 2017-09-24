import React, { Component } from 'react'
import { View, Text, Button } from "react-native"


class Screen extends Component {

    static navigationOptions = {
        title: "Let's Start"
    }

    render() {
        return (

            <View>
                <Button title="let's start" onPress={() => { this.props.navigation.navigate('route') }}></Button>
            </View>
        )
    }
}
export default Screen
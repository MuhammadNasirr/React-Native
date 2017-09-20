import React, { Component } from "react";
import { TextInput, Veiw, Text } from "react-native";


function Input({ secureTextEntry, onChangeText, value, text, placeHolder }) {
    return (
        <Veiw>
            <Text>
                {text}
            </Text>
            <TextInput secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeHolder}
            />
        </Veiw>

    )
}
const style = {
    text: {
        fontSize: 18,
        margin: 5
    },
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
    }
}
export default Input
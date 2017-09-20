import React, { Component } from 'react';
import { Text, Veiw } from 'react-native';
import Button from '../../Tags/Button';
import Header from '../../Tags/Header';
import Input from '../../Tags/Input';
import { connect } from 'react-redux';
import Middleware from '../../Store/Middleware/Middleware';

function mapStateToProp(state) {
    return {

        storeState: state
    }
}

function mapDispatchToProp(dispatch) {
    return {
        loginMethod: (idpass) => {
            dispatch(Middleware.LoginUser(idpass))
        }
    }
}


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    LoginUserMethod() {
        let userDetail = {
            id: this.state.email,
            pass: this.state.password
        }
        this.props.loginMethod(userDetail)
    }

    render() {
        return (
            <Veiw>
                <Header text='Log In' />
                <Input
                    placeHolder='abc@example.com'
                    onChangeText={email => {
                        this.setState({
                            email
                        })
                    }}
                    value={this.state.email} />
                <Input
                    placeHolder='123456'
                    onChangeText={password => {
                        this.setState({
                            password
                        })
                    }}
                    value={this.state.password} />
                    <Button onPress={this.LoginUserMethod}>Log In</Button>

            </Veiw>
        )
    }
}

export default connect(mapDispatchToProp, mapStateToProp)(Login)
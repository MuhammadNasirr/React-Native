import React, { Component } from 'react';
import { Text, Veiw } from 'react-native';
import Button from '../../Tags/Button';
import Header from '../../Tags/Header';
import Input from '../../Tags/Input';
import Spinner from '../../Tags/Spinner';
import { connect } from 'react-redux';
import Middleware from '../../Store/Middleware/Middleware';

function mapStateToProp(state) {
    return {

        storeState: state
    }
}

function mapDispatchToProp(dispatch) {
    return {
        signupMethod: (idpass) => {
            dispatch(Middleware.SignupUser(idpass))
        }
    }
}


class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    SignupUserMethod() {
        let userDetail = {
            id: this.state.email,
            pass: this.state.password
        }
        this.props.signupMethod(userDetail)
    }

    render() {
        return (
            <Veiw>
                <Header text='Sign Up' />
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
                    <Button onPress={this.SignupUserMethod}>Sign Up</Button>

            </Veiw>
        )
    }
}

export default connect(mapDispatchToProp, mapStateToProp)(Signup)
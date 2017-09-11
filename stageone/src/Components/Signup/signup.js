// import React, { Component } from 'react';
// import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
// import { View, Text, Button, AsyncStorage } from 'react-native';


// class Signup extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             fullname: '',
//             email: '',
//             password: '',
//             user:[],
//         }
//     }
//     static navigationOptions = {
//         title: "Create an account",
//         //headerLeft: <Icon name="apps" />
//     }
//     componentWillMount(){
//         AsyncStorage.getItem('users', (err, result)=>{
//             if(result !== null){
//                 let data = JSON.parse(result);
//                 this.setState({user:data});
//                 console.log(this.state.user, 'asdsad');
//             }
//         })
//     }
    
//     createAnAccount = (e) => {
//         e.preventDefault();
//             AsyncStorage.getItem('users', (err, result)=>{
//                 if(result !== null){
//                     let data = JSON.parse(result);
//                     this.setState({user:data});
//                     console.log(this.state.user, 'asdsad');
//                 }
//             })
//             var userExist = false;
//             var users = this.state.user;
//         const name = this.state.yourName;
//         const email = this.state.email;
//         const pass = this.state.pass;

//         var xyz = {}
//         var object = {
//             name: name,
//             email: email,
//             pass: pass,
//         }
//         for (var i=0; i<users.length; i++){
//             if (users[i].email === this.state.email){
//                 userExist = true
//             }
//         }
//         if(userExist === true){
//             alert('user already axist!')
//         }
//         else{
//             users.push(object);
//             AsyncStorage.setItem('nasir', JSON.stringify(object))
//             console.log('Signup Successfully')
//         }
//         console.log(xyz)
//     }
//     render() {
//         return (
//             <Container>
//                 <Content>
//                     <Form>
//                         <Item floatingLabel>
//                             <Label>Full Name</Label>
//                             <Input onChangeText={(yourName) => this.setState({ yourName })} />
//                         </Item>
//                         <Item floatingLabel>
//                             <Label>Email Address</Label>
//                             <Input onChangeText={(email) => this.setState({ email })} />
//                         </Item>
//                         <Item floatingLabel>
//                             <Label>Password</Label>
//                             <Input onChangeText={(pass) => this.setState({ pass })} />
//                         </Item>
//                     </Form>
//                     <Button title="Sign-Up" onPress={this.createAnAccount}>`</Button>
//                 </Content>
//             </Container>
//         )
//     }
// }
// export default Signup
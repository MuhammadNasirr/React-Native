import * as firebase from 'firebase';
import Actions from '../Actions/AuthActions';

class Middleware {
    static signupUser(userDetails) {
        return (dispatch) => {
            let auth = firebase.auth();
            auth.createUserWithEmailAndPassword(userDetails.email, userDetails.pass)
                .then((users) => {
                    uid = user.uid;
                    userDetails._id = uid;
                    firebase.database().ref(`Users/${uid}`).set(userDetails);
                    dispatch(Actions.SignupAction())
                })
                .catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                });
        }
    }
    static loginUser(props, userDetails) {
        return (dispatch) => {
            let auth = firebase.auth();
            auth.signInWithEmailAndPassword(userDetails.email, userDetails.pass)
                .then((users) => {
                    alert('Successfully Login!')
                    props.navigation.navigate('tabnavigation')
                })
                .catch(function (error) {
                    var errorCode = error.code;
                    var errorMesssage = error.message;
                    alert(errorMesssage)
                })
            dispatch(Actions.LoginAction())
        }
    }
}

export default Middleware;
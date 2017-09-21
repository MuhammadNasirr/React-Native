import * as firebase from 'firebase';
import Actions from '../Actions/AuthActions';

class Middleware {
    static SignupUser(userDetails) {
        return (dispatch) => {
            let auth = firebase.auth();
            auth.createUserWithEmailAndPassword(userDetails.id, userDetails.pass)
                .then((user) => {
                    uid = user.uid;
                    userDetails._id = uid;
                    firebase.database().ref(`Doctors/${uid}`).set(userDetails);
                    dispatch(Actions.SignupAction())
                })
                .catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                });
        }
    }
    static LoginUser(userDetails) {
        return (dispatch) => {
            let auth = firebase.auth();
            auth.signInWithEmailAndPassword(userDetails.id, userDetails.pass)
                .then((user) => {
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
import * as firebase from 'firebase';
import Actions from '../Actions/AuthActions';

class Middleware {
    static signupUser(docDetails) {
        return (dispatch) => {
            let auth = firebase.auth();
            auth.createUserWithEmailAndPassword(docDetails.email, docDetails.pass)
                .then((users) => {
                    uid = user.uid;
                    docDetails._id = uid;
                    firebase.database().ref(`Users/${uid}`).set(docDetails);
                    dispatch(Actions.SignupAction())
                })
                .catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                });
        }
    }
    static loginUser(props, docDetails) {
        return (dispatch) => {
            let auth = firebase.auth();
            auth.signInWithEmailAndPassword(docDetails.email, docDetails.pass)
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
    static createPatient(patient) {
           return (dispatch) => {
               let docId = patient.uid
               firebase.database().ref(`Patients/${docId}`).push(patient);
               console.log(patient);
           }
       }
       static allPatient(docId){
           return(dispatch)=>{
               firebase.database().ref(`Patients/${docId}`).on('value', (data)=>{
                   let userdata = data.val();
                   let array = [];
                   for(var data in userdata){
                       array.push(userdata[data])
                   }
                   dispatch(Actions.AllPatient(array))
               })
           }
       }
}
export default Middleware;
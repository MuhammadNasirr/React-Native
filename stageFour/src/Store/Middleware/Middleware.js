import * as firebase from 'firebase';
import Actions from '../Actions/AuthActions';

class Middleware{
    static SignupUser(userDetails){
        return(dispatch)=>{
            let auth = firebase.auth();
            auth.createUserWithEmailAndPassword(userDetails.id, userDetails.pass).then(()=>{
                dispatch(Actions.SignupAction())
            })
        }
    }
    static LoginUser(userDetails) {
        return(dispatch)=>{
            let auth = firebase.auth();
            auth.signInWithEmailAndPassword(userDetails.id,userDetails.pass).then(()=>{
                dispatch(Actions.LoginAction())
            })
        }
    }
}

export default Middleware;
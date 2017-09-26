class Actions{
    static Login = "Login"
    static Signup = "Signup"
    static AllPatient = "Patient"

    static LoginAction(login){
        return {
            type:Actions.Login,
            login
        }
    }
    static SignupAction(signup){
        return {
            type:Actions.Signup,
            signup
        }
    }
    static PatientAction(patient){
        return{
            type:Actions.AllPatient,
            patient
        }
    }
}

export default Actions;
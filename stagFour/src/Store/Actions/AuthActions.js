class Actions{
    static Login = "Login"
    static Signup = "Signup"

    static LoginAction(){
        return {
            type:Actions.Login
        }
    }
    static SignupAction(){
        return {
            type:Actions.Signup
        }
    }
}

export default Actions;
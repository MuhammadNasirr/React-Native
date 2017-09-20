import { StackNavigator, TabNavigator } from "react-navigation";
import Login from "./Component/Login/Login";
import Signup from "./Component/Signup/Signup";
// import HomePage from "./Components/HomePage/homePage";
// import PatientRegForm from "./Components/RegForm/regForm";
// import PatientList from "./Components/PatientsList/patientsList";
// import TabNavigation from "./Components/TabsNav/tabNavigation";
// import Profile from './Components/Profile/profile';
// import TabsNav from './Components/TabsNav/tabsNav';

const Naviagte = StackNavigator({
    login: { screen: Login },
    // profile: {screen: Profile},
    // patientList: { screen: PatientList },   
    // tabnavigation: { screen: TabNavigation },
    // tabsnav: { screen: TabsNav },
    // regFrom: { screen: PatientRegForm },
    // homePage: { screen: HomePage },
    signup: { screen: Signup },
})

export default Naviagte;

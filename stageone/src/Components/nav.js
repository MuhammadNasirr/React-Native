import { StackNavigator } from "react-navigation"

// import Signup from "./Signup/signup"
import PatientRegForm from "./PatientRegForm/patientRegForm"
import Login from "./Login/login"
import TabNav from "./TabNav/TabNav"
import PatientList from "./PatientList/patientList"


import Screen from "./screen"

const Nav = StackNavigator({

  AppRoute: { screen: Login },
  tabsRoute: { screen: TabNav },
 

})

export default Nav;
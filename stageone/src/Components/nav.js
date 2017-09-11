import { StackNavigator } from "react-navigation"

// import Signup from "./Signup/signup"
import PatientRegForm from "./PatientRegForm/patientRegForm"
import Login from "./Login/login"
import HomePage from "./HomePage/homePage"
import TabNav from "./TabNav/TabNav"
import PatientList from "./PatientList/patientList"


import Screen from "./screen"
//import Secondscreen from "../Components/secondscreen"

const Nav = StackNavigator({

  AppRoute: { screen: Login },
  // homeRoute: { screen: HomePage },
  tabsRoute: { screen: TabNav },
  // patientRegRoute: { screen: PatientRegForm },
  // patientRoute: { screen: PatientList },
  // route: { screen: Signup },

})

export default Nav;
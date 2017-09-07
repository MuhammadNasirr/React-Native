import { StackNavigator } from "react-navigation"

import Signup from "./Signup/signup"
import Login from "./Login/login"
import HomePage from "./HomePage/homePage"
import TabNav from "./TabNav/TabNav"
//import PatientList from "./PatientsList/patientsList"
//import PatientRegForm from "./PatientRegForm/patientregform"


import Screen from "../Components/screen"
//import Secondscreen from "../Components/secondscreen"

const Nav = StackNavigator({

  //  patientRoute: { screen: PatientList },
  //patientRegRoute: { screen: PatientRegForm },
  AppRoute: { screen: Login },
  tabsRoute: { screen: TabsNav },
  homeRoute: { screen: HomePage },
  // route: { screen: Signup },

})

export default Nav;
import { StackNavigator } from "react-navigation"

import Signup from "./Signup/signup"
import Login from "./Login/login"
import HomePage from "./HomePage/homePage"
//import PatientList from "./PatientsList/patientsList"
//import PatientRegForm from "./PatientRegForm/patientregform"


import Screen from "../Components/screen"
//import Secondscreen from "../Components/secondscreen"

const Nav = StackNavigator({

  //  patientRoute: { screen: PatientList },
  //patientRegRoute: { screen: PatientRegForm },
  homeRoute: { screen: HomePage },
  AppRoute: { screen: Login },
  route: { screen: Signup },

})

export default Nav;
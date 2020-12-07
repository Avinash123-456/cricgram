import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Home";
import Login from "../Login";
import SignUp from "../SignUp";
import ResetPass from '../ResetPass';
import Profile from '../Profile';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "green",
  },
  headerTintColor: "white",
  headerBackTitle: "black",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ResetPass" component={ResetPass} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator,ContactStackNavigator };
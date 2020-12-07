import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator } from "./StackNav";
import Profile from '../Profile';
import API from '../CricketAPI'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="CricketAPI" component={API} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
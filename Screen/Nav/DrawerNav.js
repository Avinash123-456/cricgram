import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from '../Login';
import SignUp from '../SignUp';
import Host from '../Host';
import Tournament from '../Tournament';
import Profile from '../Profile';

import BottomTabNavigator from "./TabNav";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="SignUp" component={SignUp} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Host" component={Host} />
      <Drawer.Screen name="Tournament" component={Tournament} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// import BottomTabNavigator from './Screen/Nav/TabNav';
import DrawerNavigator from "./Screen/Nav/DrawerNav";

 const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}
export default App;
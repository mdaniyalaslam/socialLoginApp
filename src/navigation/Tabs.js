import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../modules/screens/Home";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              style={{ marginBottom: -10 }}
              name="home"
              color={focused ? "#01BA76" : "lightgrey"}
              size={22}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

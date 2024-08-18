import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import { tabBarHeight } from "../constants/sizes";
import Discover from "../screens/Discover";
import Home from "../screens/home/Home";
import Profile from "../screens/Profile";
import { TabParamList } from "../utils/navigation-types";

const Tab = createBottomTabNavigator<TabParamList>();
export default function TabNavigation() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        lazy: false,
        // bottom tab bar
        tabBarActiveTintColor: COLORS.white,
        tabBarLabelStyle: {
          fontFamily: "outfit-regular",
          fontSize: 14,
          marginBottom: 2,
        },
        tabBarStyle: {
          backgroundColor: COLORS.primary,
          borderTopWidth: 0,

          height: tabBarHeight + insets.bottom,
          paddingTop: 2,
        },
      }}
      sceneContainerStyle={{ backgroundColor: COLORS.white }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "My Trip",
          tabBarIcon: ({ color }) => (
            <Ionicons name="location-sharp" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="globe-sharp" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

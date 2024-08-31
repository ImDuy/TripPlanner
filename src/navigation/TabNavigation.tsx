import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import { tabBarHeight } from "../constants/sizes";
import Discover from "../screens/discover/Discover";
import Home from "../screens/home/Home";
import Profile from "../screens/Profile";
import { TabParamList } from "../utils/navigation-types";
import { StyleSheet, View } from "react-native";

const Tab = createBottomTabNavigator<TabParamList>();
export default function TabNavigation() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        lazy: false,
        // bottom tab bar
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarLabelStyle: {
          fontFamily: "outfit-regular",
          fontSize: 14,
          marginBottom: 2,
        },
        tabBarStyle: {
          backgroundColor: COLORS.white,
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
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                ...styles.tabIconWithBottomIndicator,
                borderBottomColor: focused ? color : "transparent",
              }}
            >
              <AntDesign name="home" size={27} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                ...styles.tabIconWithBottomIndicator,
                borderBottomColor: focused ? color : "transparent",
              }}
            >
              <AntDesign name="search1" size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                ...styles.tabIconWithBottomIndicator,
                borderBottomColor: focused ? color : "transparent",
              }}
            >
              <AntDesign name="user" size={26} color={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIconWithBottomIndicator: {
    borderBottomWidth: 2,
    height: "80%",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
});

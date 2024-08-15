import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import COLORS from "../constants/colors";
import LandingPage from "../screens/auth/LandingPage";
import SignIn from "../screens/auth/SignIn";
import SignUp from "../screens/auth/SignUp";
import { AuthStackParamList } from "../utils/navTypeCheck";

const Stack = createNativeStackNavigator<AuthStackParamList>();
export default function AuthStackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: COLORS.white },
      }}
    >
      <Stack.Screen name="LandingPage" component={LandingPage} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

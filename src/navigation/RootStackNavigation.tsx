import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import COLORS from "../constants/colors";
import SearchPlace from "../screens/home/create-trip/SearchPlace";
import { RootStackParamList } from "../utils/navigation-types";
import TabNavigation from "./TabNavigation";
import { CreateTripProvider } from "../context/CreateTripContext";
import SelectTravelers from "../screens/home/create-trip/SelectTravelers";
import SelectDate from "../screens/home/create-trip/SelectDate";
import SelectBudget from "../screens/home/create-trip/SelectBudget";
import ReviewTrip from "../screens/home/create-trip/ReviewTrip";
import CreateTrip from "../screens/home/create-trip/CreateTrip";
import AuthStackNavigation from "./AuthStackNavigation";

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function RootStackNavigation() {
  return (
    <CreateTripProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: COLORS.white },
          headerTintColor: COLORS.primary,
          headerTitleStyle: {
            color: COLORS.primary,
            fontFamily: "outfit-medium",
            fontSize: 20,
          },
          contentStyle: { backgroundColor: COLORS.white },
        }}
      >
        <Stack.Screen name="AuthStack" component={AuthStackNavigation} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen
          name="SearchPlace"
          component={SearchPlace}
          options={{
            headerShown: true,
            title: "Where do you want to go?",
          }}
        />
        <Stack.Screen
          name="SelectTravelers"
          component={SelectTravelers}
          options={{ headerShown: true, headerTitle: "" }}
        />
        <Stack.Screen
          name="SelectDate"
          component={SelectDate}
          options={{ headerShown: true, headerTitle: "" }}
        />
        <Stack.Screen
          name="SelectBudget"
          component={SelectBudget}
          options={{ headerShown: true, headerTitle: "" }}
        />
        <Stack.Screen
          name="ReviewTrip"
          component={ReviewTrip}
          options={{ headerShown: true, headerTitle: "" }}
        />
        <Stack.Screen name="CreateTrip" component={CreateTrip} />
      </Stack.Navigator>
    </CreateTripProvider>
  );
}

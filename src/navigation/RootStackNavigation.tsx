import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import COLORS from "../constants/colors";
import SearchLocation from "../screens/home/create-trip/SearchLocation";
import { RootStackParamList } from "../utils/navigation-types";
import TabNavigation from "./TabNavigation";
import { CreateTripProvider } from "../context/CreateTripContext";
import SelectTravelers from "../screens/home/create-trip/SelectTravelers";
import SelectDate from "../screens/home/create-trip/SelectDate";
import SelectBudget from "../screens/home/create-trip/SelectBudget";
import ReviewTrip from "../screens/home/create-trip/ReviewTrip";
import CreateTrip from "../screens/home/create-trip/CreateTrip";
import AuthStackNavigation from "./AuthStackNavigation";
import TripDetails from "../screens/home/trip-details/TripDetails";
import PlaceDetails from "../screens/discover/place-details/PlaceDetails";

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function RootStackNavigation() {
  return (
    <CreateTripProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerBackTitleVisible: false,
          headerShadowVisible: false,
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
          component={SearchLocation}
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
        <Stack.Screen
          name="TripDetails"
          component={TripDetails}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="PlaceDetails"
          component={PlaceDetails}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
            headerTintColor: COLORS.white,
          }}
        />
      </Stack.Navigator>
    </CreateTripProvider>
  );
}

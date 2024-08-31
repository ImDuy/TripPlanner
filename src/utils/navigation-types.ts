import { NavigatorScreenParams } from "@react-navigation/native";
import { DiscoverPlace, TripPlan } from "./types";

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  TabNavigation: NavigatorScreenParams<TabParamList>;
  SearchPlace: undefined;
  SelectTravelers: undefined;
  SelectDate: undefined;
  SelectBudget: undefined;
  ReviewTrip: undefined;
  CreateTrip: undefined;
  TripDetails: { tripData: TripPlan };
  PlaceDetails: { placeItem: DiscoverPlace };
};
export type AuthStackParamList = {
  LandingPage: undefined;
  SignIn: undefined;
  SignUp: undefined;
};
export type TabParamList = {
  Home: undefined;
  Discover: undefined;
  Profile: undefined;
};

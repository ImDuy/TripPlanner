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
  SearchPlaces: { activeTab: DiscoverFilterOption };
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
export type DiscoverFilterOption = "All" | "Places" | "Hotels";

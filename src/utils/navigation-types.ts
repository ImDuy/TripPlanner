import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  TabNavigation: NavigatorScreenParams<TabParamList>;
  SearchPlace: undefined;
  SelectTravelers: undefined;
  SelectDate: undefined;
  SelectBudget: undefined;
  ReviewTrip: undefined;
  CreateTrip: undefined;
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

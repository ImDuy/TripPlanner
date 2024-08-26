import { Dimensions } from "react-native";

export const screenSize = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

export const screenPadding = {
  horizontal: 24,
};

export const headerHeight = 60;
export const tabBarHeight = 56;

import { StyleSheet } from "react-native";
import { screenPadding } from "./sizes";
import COLORS from "./colors";

const defaultStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: screenPadding.horizontal,
  },
  container: {
    flex: 1,
  },
  headerTitle: {
    fontFamily: "outfit-bold",
    color: COLORS.primary,
    fontSize: 30,
  },
  shadowLight: {
    elevation: 3,
    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  shadowDark: {
    elevation: 6,
    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export default defaultStyles;

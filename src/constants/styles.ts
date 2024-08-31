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
    elevation: 2,
    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  shadowDark: {
    elevation: 4,
    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export default defaultStyles;

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
});

export default defaultStyles;

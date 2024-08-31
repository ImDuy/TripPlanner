import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import Animated from "react-native-reanimated";
import COLORS from "../constants/colors";

interface Props {
  style?: StyleProp<ViewStyle>;
}
export default function Divider({ style }: Props) {
  return <Animated.View style={[styles.divider, style]} />;
}
const styles = StyleSheet.create({
  divider: { height: 2, backgroundColor: COLORS.light_gray },
});

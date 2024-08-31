import { StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import { BottomSheetBackgroundProps } from "@gorhom/bottom-sheet";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";

export default function CustomBottomSheetBackground({
  animatedIndex,
  style,
}: BottomSheetBackgroundProps) {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: interpolateColor(
      animatedIndex.value,
      [0, 1],
      ["transparent", "white"]
    ),
  }));
  const containerStyle = useMemo(
    () => [style, containerAnimatedStyle],
    [style, containerAnimatedStyle]
  );
  return <Animated.View style={containerStyle} />;
}

const styles = StyleSheet.create({});

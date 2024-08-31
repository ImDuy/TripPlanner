import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import COLORS from "../../constants/colors";
import defaultStyles from "../../constants/styles";

interface Props {
  title: string;
  location: string;
  animatedIndex: SharedValue<number>;
}

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);
export default function BottomSheetHeader({
  animatedIndex,
  title,
  location,
}: Props) {
  const titleStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      animatedIndex.value,
      [0, 1],
      [COLORS.white, COLORS.primary]
    ),
    shadowColor: interpolateColor(
      animatedIndex.value,
      [0, 1],
      [COLORS.primary, "transparent"]
    ),
    elevation: interpolate(
      animatedIndex.value,
      [0, 1],
      [6, 0],
      Extrapolation.CLAMP
    ),
  }));

  const locationStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      animatedIndex.value,
      [0, 1],
      [COLORS.white, COLORS.gray]
    ),
    fontSize: interpolate(animatedIndex.value, [0, 1], [26, 22]),
  }));

  const locationIconStyle = useAnimatedStyle(() => ({
    transform: [{ scale: interpolate(animatedIndex.value, [0, 1], [0, 1]) }],
  }));
  return (
    <>
      <Animated.Text
        style={[styles.title, defaultStyles.shadowDark, titleStyle]}
      >
        {title}
      </Animated.Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Animated.Text
          style={[
            styles.location,
            defaultStyles.shadowDark,
            titleStyle,
            locationStyle,
          ]}
          numberOfLines={1}
        >
          {location}
        </Animated.Text>
        <AnimatedIcon
          name="location-outline"
          size={22}
          color={COLORS.gray}
          style={locationIconStyle}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "outfit-bold",
    fontSize: 34,
  },
  location: { fontFamily: "outfit-regular" },
});

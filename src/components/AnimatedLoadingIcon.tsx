import { AntDesign } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { StyleProp, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import COLORS from "../constants/colors";
interface Props {
  size?: number;
  color?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function AnimatedLoadingIcon({
  size = 24,
  color = COLORS.white,
  containerStyle,
}: Props) {
  const rotation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });
  useEffect(() => {
    rotation.value = withRepeat(withTiming(360, { duration: 700 }), -1);
  }, [rotation]);
  return (
    <Animated.View style={[animatedStyle, containerStyle]}>
      <AntDesign name="loading2" size={size} color={color} />
    </Animated.View>
  );
}

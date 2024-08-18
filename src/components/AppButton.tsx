import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import COLORS from "../constants/colors";
import AnimatedLoadingIcon from "./AnimatedLoadingIcon";

interface Props {
  label: string;
  isFilled?: boolean;
  isLoading?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}
export default function AppButton({
  label,
  isFilled = false,
  isLoading = false,
  onPress,
  containerStyle,
  labelStyle,
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: isFilled ? COLORS.primary : COLORS.white },
        containerStyle,
      ]}
      disabled={isLoading}
      onPress={onPress}
    >
      {isLoading ? (
        <AnimatedLoadingIcon color={isFilled ? COLORS.white : COLORS.primary} />
      ) : (
        <Text
          style={[
            styles.label,
            { color: isFilled ? COLORS.white : COLORS.primary },
            labelStyle,
          ]}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  label: {
    fontFamily: "outfit-medium",
    fontSize: 16,
  },
});

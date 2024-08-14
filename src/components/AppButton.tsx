import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import COLORS from "../constants/colors";

interface Props {
  label: string;
  isFilled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
export default function AppButton({
  label,
  isFilled = false,
  onPress,
  containerStyle,
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: isFilled ? COLORS.primary : COLORS.white },
        containerStyle,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.label,
          { color: isFilled ? COLORS.white : COLORS.primary },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 18,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  label: {
    fontFamily: "outfit-regular",
    fontSize: 16,
  },
});

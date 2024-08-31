import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import COLORS from "../constants/colors";

interface Props {
  rating: number;
  disabled?: boolean;
  size?: number;
  containerStyle?: StyleProp<ViewStyle>;
}
export default function RatingStars({
  rating,
  disabled = true,
  size = 14,
  containerStyle,
}: Props) {
  return (
    <View style={containerStyle}>
      <AirbnbRating
        defaultRating={rating}
        count={5}
        showRating={false}
        isDisabled={disabled}
        selectedColor={COLORS.primary}
        size={size}
      />
    </View>
  );
}

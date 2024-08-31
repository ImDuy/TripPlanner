import React from "react";
import { StyleSheet, Text, View } from "react-native";
import COLORS from "../../constants/colors";
import RatingStars from "../RatingStars";

interface Props {
  rating: number;
}
export default function OverallRating({ rating }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.rating}>{rating.toFixed(1)}</Text>
      <View>
        <Text style={styles.overallText}>Overall Rating</Text>
        <RatingStars
          rating={rating}
          containerStyle={styles.ratingStarsContainer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  rating: {
    color: COLORS.primary,
    fontFamily: "outfit-regular",
    fontSize: 42,
  },
  overallText: {
    color: COLORS.gray,
    fontFamily: "outfit-regular",
  },
  ratingStarsContainer: { transform: [{ translateX: -3 }] },
});

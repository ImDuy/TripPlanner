import { StyleSheet, Text, View } from "react-native";
import React from "react";
import COLORS from "../../constants/colors";
import { Timestamp } from "firebase/firestore";
import { formatDateMonthYear } from "../../utils/helpers";

interface Props {
  locationName: string;
  startDate: Timestamp;
  endDate: Timestamp;
  travelers: string;
}
export default function DetailHeader({
  locationName,
  startDate,
  endDate,
  travelers,
}: Props) {
  return (
    <View>
      <Text style={styles.locationName} numberOfLines={1}>
        {locationName}
      </Text>
      <Text style={styles.subTitle}>
        {formatDateMonthYear(startDate.toDate())} -{" "}
        {formatDateMonthYear(endDate.toDate())}
      </Text>
      <Text style={{ ...styles.subTitle, marginTop: 0 }}>🚌 {travelers}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  locationName: {
    color: COLORS.primary,
    fontFamily: "outfit-bold",
    fontSize: 28,
  },
  subTitle: {
    marginTop: 8,
    fontFamily: "outfit-medium",
    fontSize: 16,
    color: COLORS.gray,
  },
});

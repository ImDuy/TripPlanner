import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";
import React from "react";
import COLORS from "../../constants/colors";
import AppButton from "../AppButton";

interface Props {
  price: string;
  headerStyle: StyleProp<TextStyle>;
  handleBookFlight?: () => void;
}
export default function FlightSection({
  price,
  headerStyle,
  handleBookFlight,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={[headerStyle, { fontSize: 20 }]} numberOfLines={1}>
        ✈️ Flight
      </Text>
      <View style={styles.innerContainer}>
        <View style={styles.detailContainer}>
          <Text style={styles.flightDetails} numberOfLines={1}>
            Airline: Delta
          </Text>
          <Text style={styles.flightDetails} numberOfLines={1}>
            Price: {price}
          </Text>
        </View>
        <AppButton
          label="Book"
          isFilled
          onPress={handleBookFlight}
          containerStyle={styles.btnContainer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    rowGap: 4,
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: COLORS.light_gray,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  detailContainer: {
    flex: 2,
  },
  flightDetails: {
    color: COLORS.primary,
    fontFamily: "outfit-medium",
    fontSize: 16,
  },
  btnContainer: {
    height: 40,
    borderRadius: 10,
  },
});

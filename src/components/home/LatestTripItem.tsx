import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import COLORS from "../../constants/colors";
import IMAGES from "../../constants/images";
import { formatDateMonthYear } from "../../utils/helpers";
import AppButton from "../AppButton";
import { TripPlan } from "../../utils/types";

interface Props {
  item: TripPlan;
  onShowPlanDetails: (item: TripPlan) => void;
}
export default function LatestTripItem({ item, onShowPlanDetails }: Props) {
  if (!item.userTripOption) return null;
  return (
    <>
      <Image
        source={
          item.userTripOption.locationInfo.photoRef
            ? {
                uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${item.userTripOption.locationInfo.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
              }
            : IMAGES.default_trip_thumbnail
        }
        style={styles.thumbnail}
      />
      <Text style={styles.title}>{item.userTripOption.locationInfo.name}</Text>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitleText}>
          {formatDateMonthYear(item.userTripOption.startDate.toDate())}
        </Text>
        <Text style={styles.subTitleText}>
          🚌 {item.userTripOption.traveler}
        </Text>
      </View>
      <AppButton
        label="See your plan"
        isFilled
        containerStyle={{ height: 50, borderRadius: 12 }}
        onPress={() => onShowPlanDetails(item)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    width: "100%",
    height: 225,
    borderRadius: 14,
  },
  title: {
    color: COLORS.primary,
    fontFamily: "outfit-medium",
    fontSize: 24,
    marginTop: 10,
  },
  subTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subTitleText: {
    color: COLORS.gray,
    fontFamily: "outfit-medium",
    fontSize: 16,
    marginTop: 2,
    marginBottom: 8,
  },
});

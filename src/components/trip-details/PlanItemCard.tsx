import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import IMAGES from "../../constants/images";
import COLORS from "../../constants/colors";
import { googlePlaceSearchByText } from "../../utils/helpers";

interface Props {
  name: string;
  description: string;
  ticketPrice: string;
  travelTime: string;
  onBookingPress?: () => void;
}
export default function PlanItemCard({
  name,
  description,
  ticketPrice,
  travelTime,
  onBookingPress,
}: Props) {
  const [photoRef, setPhotoRef] = useState<string>();

  useEffect(() => {
    googlePlaceSearchByText(name).then((result) => {
      setPhotoRef(result.results[0]?.photos[0]?.photo_reference);
    });
  }, [name]);

  return (
    <View style={styles.container}>
      <Image
        source={
          photoRef
            ? {
                uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
              }
            : IMAGES.default_trip_thumbnail
        }
        style={styles.thumbnail}
      />

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.detailsContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.normalText}>
            🎫 Ticket Price:{"\n"}
            <Text style={styles.infoText}>{ticketPrice}</Text>
          </Text>
          <Text style={styles.normalText}>
            ⏱️ Travel Time:{"\n"}
            <Text style={styles.infoText}>{travelTime}</Text>
          </Text>
        </View>

        <TouchableOpacity onPress={onBookingPress}></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light_blue,
    borderRadius: 16,
    padding: 12,
  },
  thumbnail: {
    width: "100%",
    height: 140,
    borderRadius: 8,
  },
  name: {
    marginTop: 12,
    textAlign: "center",
    color: COLORS.primary,
    fontFamily: "outfit-bold",
    fontSize: 18,
  },
  description: {
    marginTop: 4,
    color: COLORS.gray,
    fontFamily: "outfit-medium",
  },
  detailsContainer: {
    marginTop: 6,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  textContainer: {
    flex: 1,
  },
  normalText: {
    color: COLORS.primary,
    fontFamily: "outfit-regular",
    fontSize: 16,
  },
  infoText: {
    fontFamily: "outfit-bold",
    textAlign: "center",
  },
});

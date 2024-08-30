import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import IMAGES from "../../constants/images";
import COLORS from "../../constants/colors";
import { googlePlaceSearchByText } from "../../utils/helpers";

interface Props {
  name: string;
  price: string;
  rating: number;
  onItemPress?: (hotelItem: any) => void;
}
export default function HotelItemCard({
  name,
  price,
  rating,
  onItemPress,
}: Props) {
  const [photoRef, setPhotoRef] = useState<string>();
  useEffect(() => {
    googlePlaceSearchByText(name).then((result) => {
      setPhotoRef(result.results[0]?.photos[0]?.photo_reference);
    });
  }, [name]);

  return (
    <TouchableHighlight
      style={styles.container}
      activeOpacity={0.6}
      underlayColor={COLORS.light_gray}
      onPress={onItemPress}
    >
      <View>
        <View style={styles.thumbnailContainer}>
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
        </View>

        <Text numberOfLines={1} style={styles.name}>
          {name}
        </Text>
        <View style={styles.detailContainer}>
          <Text numberOfLines={1} style={styles.detailText}>
            ⭐️ {rating}
          </Text>
          <Text numberOfLines={1} style={styles.detailText}>
            💰 {price.replace(" per night", "")}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 240,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  thumbnailContainer: {
    width: "100%",
    height: 130,
    borderRadius: 16,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 4,
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  name: {
    color: COLORS.primary,
    fontFamily: "outfit-medium",
    fontSize: 18,
    textAlign: "center",
    marginTop: 4,
    marginHorizontal: 5,
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 5,
  },
  detailText: {
    color: COLORS.primary,
    fontFamily: "outfit-regular",
    flexShrink: 1,
  },
});

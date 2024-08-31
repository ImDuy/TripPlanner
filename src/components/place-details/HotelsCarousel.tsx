import Ionicons from "@expo/vector-icons/Ionicons";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../../constants/colors";
import defaultStyles from "../../constants/styles";
import { DiscoverHotel } from "../../utils/types";
import RatingStars from "../RatingStars";

interface Props {
  hotelList: DiscoverHotel[];
  onHotelCardPress?: () => void;
}

const CARD_WIDTH = 280;
const CARD_SPACING = 20;
const CARD_WIDTH_SPACING = CARD_WIDTH + CARD_SPACING;
export default function HotelsCarousel({ hotelList, onHotelCardPress }: Props) {
  return (
    <BottomSheetFlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH_SPACING} //pagination between children elements - used with decelerationRate="fast"
      data={hotelList}
      contentContainerStyle={{ padding: 2 }}
      renderItem={({ item }) => (
        <HotelCard hotelItem={item} onItemPress={onHotelCardPress} />
      )}
      ItemSeparatorComponent={() => <View style={{ width: CARD_SPACING }} />}
    />
  );
}

const HotelCard = ({
  hotelItem,
  onItemPress,
}: {
  hotelItem: DiscoverHotel;
  onItemPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      style={[styles.cardContainer, defaultStyles.shadowLight]}
      onPress={onItemPress}
    >
      <Image source={hotelItem.image} style={styles.cardThumbnail} />

      <View style={styles.cardInfoContainer}>
        {/* Bold Text */}
        <View style={styles.cardInfoTextContainer}>
          <Text style={[styles.cardInfoBold, { flex: 1 }]} numberOfLines={1}>
            {hotelItem.title}
          </Text>
          <Text style={styles.cardInfoBold} numberOfLines={1}>
            {hotelItem.pricePerDay}
          </Text>
        </View>
        {/* Light Text */}
        <View style={styles.cardInfoTextContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.cardInfoLight} numberOfLines={1}>
              {hotelItem.location}
            </Text>
            <Ionicons name="location-outline" size={16} color={COLORS.gray} />
          </View>
          <Text style={styles.cardInfoLight}>per day</Text>
        </View>
        {/* Rating */}
        <View style={styles.rowContainer}>
          <RatingStars
            rating={hotelItem.rating / 2}
            size={12}
            containerStyle={styles.ratingStarsContainer}
          />
          <Text style={styles.ratingText}>
            {(hotelItem.rating / 2).toFixed(1)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: CARD_WIDTH,
    height: 200,
    borderRadius: 16,
    backgroundColor: COLORS.white,
  },
  cardThumbnail: {
    width: "100%",
    height: "58%",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  cardInfoContainer: {
    padding: 12,
    gap: 4,
  },
  cardInfoTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 30,
  },
  cardInfoBold: {
    color: COLORS.primary,
    fontFamily: "outfit-bold",
    fontSize: 16,
  },
  cardInfoLight: {
    color: COLORS.gray,
    fontFamily: "outfit-medium",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingStarsContainer: { transform: [{ translateX: -3 }], marginRight: 4 },
  ratingText: { color: COLORS.primary, fontFamily: "outfit-medium" },
});

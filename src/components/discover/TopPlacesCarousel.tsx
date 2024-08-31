import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TOP_PLACES } from "../../utils/data";
import { DiscoverPlace } from "../../utils/types";
import COLORS from "../../constants/colors";
import defaultStyles from "../../constants/styles";

const CARD_WIDTH = 280;
const CARD_SPACING = 20;
const CARD_WIDTH_SPACING = CARD_WIDTH + CARD_SPACING;
export default function TopPlacesCarousel() {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH_SPACING} //pagination between children elements - used with decelerationRate="fast"
      decelerationRate="fast"
      data={TOP_PLACES}
      renderItem={({ item }) => <TopPlaceCard item={item} />}
      ItemSeparatorComponent={() => <View style={{ width: CARD_SPACING }} />}
    />
  );
}

const TopPlaceCard = ({ item }: { item: DiscoverPlace }) => {
  return (
    <TouchableOpacity style={[styles.cardImg, defaultStyles.shadowDark]}>
      <Image source={item.image} style={styles.cardImg} />

      <View style={styles.cardInfoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardImg: {
    height: 190,
    width: CARD_WIDTH,
    borderRadius: 16,
  },
  cardInfoContainer: {
    ...StyleSheet.absoluteFillObject,
    padding: 20,
    justifyContent: "flex-end",
  },
  title: { color: COLORS.white, fontFamily: "outfit-bold", fontSize: 22 },
  subTitle: { color: COLORS.white, fontFamily: "outfit-regular", fontSize: 20 },
});

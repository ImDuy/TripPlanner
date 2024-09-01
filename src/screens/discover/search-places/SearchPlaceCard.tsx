import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../utils/navigation-types";
import defaultStyles from "../../../constants/styles";
import COLORS from "../../../constants/colors";
import { isDiscoverPlace } from "../../../utils/helpers";
import { DiscoverHotel, DiscoverPlace } from "../../../utils/types";
import Animated, { FadeInDown } from "react-native-reanimated";

interface Props {
  item: DiscoverPlace | DiscoverHotel;
  index: number;
}
export default function SearchPlaceCard({ item, index }: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Animated.View
      style={[
        styles.cardContainer,
        {
          marginTop: index === 1 ? 30 : 0,
          height: index % 3 === 0 ? 180 : 220,
        },
      ]}
      entering={index < 6 ? FadeInDown.delay(60) : undefined}
    >
      <TouchableOpacity
        style={styles.cardInnerContainer}
        onPress={() =>
          isDiscoverPlace(item) &&
          navigation.navigate("PlaceDetails", { placeItem: item })
        }
      >
        <Image source={item.image} style={styles.cardThumbnail} />
        <View style={styles.cardInfoContainer}>
          <Text style={styles.cardTitle} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.cardLocation} numberOfLines={1}>
            {item.location}
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  cardContainer: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 16,
  },
  cardInnerContainer: {
    ...defaultStyles.shadowLight,
    height: "99%",
    backgroundColor: COLORS.white,
    borderRadius: 16,
  },
  cardThumbnail: {
    width: "100%",
    flex: 2.5,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  cardInfoContainer: {
    flex: 1,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    color: COLORS.primary,
    fontFamily: "outfit-bold",
    fontSize: 18,
  },
  cardLocation: {
    color: COLORS.gray,
    fontFamily: "outfit-medium",
    fontSize: 14,
  },
});

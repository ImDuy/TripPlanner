import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import COLORS from "../../constants/colors";
import { PLACES } from "../../utils/data";
import { DiscoverPlace } from "../../utils/types";
import defaultStyles from "../../constants/styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../utils/navigation-types";
import ListHeaderWithSeeAll from "../ListHeaderWithSeeAll";

export default function PopularList() {
  return (
    <View style={styles.container}>
      <ListHeaderWithSeeAll title="Popular" />
      <FlatList
        scrollEnabled={false}
        data={PLACES}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingHorizontal: 2, paddingVertical: 8 }}
        renderItem={({ item }) => <PopularCard item={item} />}
        ItemSeparatorComponent={() => (
          <View style={{ width: 20, height: 20 }} />
        )}
      />
    </View>
  );
}

const PopularCard = ({ item }: { item: DiscoverPlace }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={[styles.cardContainer, defaultStyles.shadowLight]}
      onPress={() => navigation.navigate("PlaceDetails", { placeItem: item })}
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
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  cardContainer: {
    width: "48%",
    height: 220,
    borderRadius: 16,
    backgroundColor: COLORS.white,
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

import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React from "react";
import { StyleProp, StyleSheet, Text, ViewStyle } from "react-native";
import COLORS from "../../constants/colors";
import { DiscoverPlace } from "../../utils/types";
import ListHeaderWithSeeAll from "../ListHeaderWithSeeAll";
import HotelsCarousel from "./HotelsCarousel";
import OverallRating from "./OverallRating";
import Divider from "../Divider";
import ReviewList from "./ReviewList";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../utils/navigation-types";

interface Props {
  details: DiscoverPlace;
  style?: StyleProp<ViewStyle>;
}
export default function BottomSheetContent({ details, style }: Props) {
  const { description, rating } = details;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <BottomSheetScrollView
      showsVerticalScrollIndicator={false}
      style={style}
      contentContainerStyle={{ paddingBottom: 16 }}
    >
      <OverallRating rating={rating / 2} />
      {/* Summary */}
      <Text
        style={[
          styles.sectionTitle,
          styles.sectionHeaderContainer,
          { marginTop: 8 },
        ]}
      >
        Summary
      </Text>
      <Text style={styles.description}>{description}</Text>

      {/* Hotels */}
      <ListHeaderWithSeeAll
        title="Hotels"
        titleStyle={styles.sectionTitle}
        seeAllStyle={styles.seeAllText}
        containerStyle={styles.sectionHeaderContainer}
        onSeeAllPress={() =>
          navigation.navigate("SearchPlaces", { activeTab: "Hotels" })
        }
      />
      <HotelsCarousel hotelList={details.hotels} />

      {/* Reviews */}
      <ListHeaderWithSeeAll
        title="Reviews"
        titleStyle={styles.sectionTitle}
        seeAllStyle={styles.seeAllText}
        containerStyle={styles.sectionHeaderContainer}
      />
      <Divider style={styles.reviewDividerSpacing} />
      <ReviewList reviewList={details.reviews} />
    </BottomSheetScrollView>
  );
}

const styles = StyleSheet.create({
  sectionHeaderContainer: {
    marginTop: 20,
    marginBottom: 4,
  },
  sectionTitle: {
    color: COLORS.gray,
    fontFamily: "outfit-medium",
    fontSize: 22,
  },

  description: {
    color: COLORS.primary,
    fontFamily: "outfit-regular",
  },
  seeAllText: { fontSize: 18 },
  reviewDividerSpacing: {
    marginTop: 6,
    marginBottom: 24,
  },
});

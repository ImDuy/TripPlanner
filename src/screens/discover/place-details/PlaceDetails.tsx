import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import DetailsBottomSheet from "../../../components/place-details/DetailsBottomSheet";
import { screenSize } from "../../../constants/sizes";
import defaultStyles from "../../../constants/styles";
import { RootStackParamList } from "../../../utils/navigation-types";

export default function PlaceDetails() {
  const {
    params: { placeItem },
  } = useRoute<RouteProp<RootStackParamList, "PlaceDetails">>();

  return (
    <View style={{ ...defaultStyles.container }}>
      <Image source={placeItem.image} style={styles.imageBackground} />
      <DetailsBottomSheet details={placeItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    ...StyleSheet.absoluteFillObject,
    width: screenSize.width,
    height: screenSize.height,
  },
});

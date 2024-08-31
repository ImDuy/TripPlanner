import BottomSheet from "@gorhom/bottom-sheet";
import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  Extrapolation,
  FadeInDown,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import defaultStyles from "../../constants/styles";
import { DiscoverPlace } from "../../utils/types";
import Divider from "../Divider";
import BottomSheetHeader from "./BottomSheetHeader";
import CustomBottomSheetBackground from "./CustomBottomSheetBackground";
import BottomSheetContent from "./BottomSheetContent";
interface Props {
  details: DiscoverPlace;
}

export default function DetailsBottomSheet({ details: placeItem }: Props) {
  const animatedIndex = useSharedValue(0);
  const snapPoints = useMemo(() => ["30%", "80%"], []);

  const animatedOpacityStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [0, 1],
      [0, 1],
      Extrapolation.CLAMP
    ),
  }));

  return (
    <BottomSheet
      animatedIndex={animatedIndex}
      snapPoints={snapPoints}
      backgroundComponent={CustomBottomSheetBackground}
      handleIndicatorStyle={styles.transparentBackground}
    >
      <Animated.View
        style={[defaultStyles.screenContainer]}
        entering={FadeInDown.duration(800)}
      >
        <BottomSheetHeader
          title={placeItem.title}
          location={placeItem.location}
          animatedIndex={animatedIndex}
        />

        <Divider style={[styles.dividerSpacing, animatedOpacityStyle]} />

        <BottomSheetContent details={placeItem} style={animatedOpacityStyle} />
      </Animated.View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  transparentBackground: {
    backgroundColor: "transparent",
  },
  dividerSpacing: {
    marginTop: 18,
    marginBottom: 8,
  },
});

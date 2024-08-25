import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import COLORS from "../../constants/colors";
import { screenPadding, screenSize } from "../../constants/sizes";

interface Props {
  onAddNewTripPlan: () => void;
}

export default function HomeHeader({ onAddNewTripPlan }: Props) {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.headerContainer,
        position: "absolute",
        top: screenSize.height < 700 ? top + 8 : top + 12,
        left: screenPadding.horizontal,
        right: screenPadding.horizontal,
        zIndex: 100,
      }}
    >
      <Text style={styles.headerTitle}>My Trips</Text>
      <TouchableOpacity style={styles.headerAddBtn} onPress={onAddNewTripPlan}>
        <Ionicons name="add-circle" size={46} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: "outfit-bold",
    fontSize: 36,
    color: COLORS.primary,
  },
  headerAddBtn: {
    padding: 4,
  },
});

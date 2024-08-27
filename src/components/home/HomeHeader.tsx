import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import COLORS from "../../constants/colors";
import { headerHeight, screenPadding } from "../../constants/sizes";

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
        top: top,
        left: screenPadding.horizontal,
        right: screenPadding.horizontal,
        height: headerHeight,
        alignItems: "center",
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
    backgroundColor: COLORS.white,
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

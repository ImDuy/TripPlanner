import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import { headerHeight, screenPadding } from "../constants/sizes";

interface Props {
  headerTitle: string;
  headerBtnIconName: keyof typeof AntDesign.glyphMap;
  headerBtnSize: number;
  onHeaderBtnPress?: () => void;
}

export default function ScreenHeader({
  headerTitle,
  headerBtnIconName,
  headerBtnSize,
  onHeaderBtnPress,
}: Props) {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.headerContainer,
        position: "absolute",
        top: top,
        left: 0,
        right: 0,
        height: headerHeight,
        alignItems: "center",
        paddingHorizontal: screenPadding.horizontal,
        zIndex: 100,
      }}
    >
      <Text style={styles.headerTitle}>{headerTitle}</Text>
      <TouchableOpacity style={styles.headerAddBtn} onPress={onHeaderBtnPress}>
        <AntDesign
          name={headerBtnIconName}
          size={headerBtnSize}
          color={COLORS.primary}
        />
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
    fontSize: 30,
    color: COLORS.primary,
  },
  headerAddBtn: {
    padding: 4,
  },
});

import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import { headerHeight, screenPadding } from "../constants/sizes";
import defaultStyles from "../constants/styles";

interface Props {
  headerTitle: string;
  headerBtnIconName: keyof typeof AntDesign.glyphMap;
  headerBtnSize: number;
  headerBtnContainerStyle?: StyleProp<ViewStyle>;
  onHeaderBtnPress?: () => void;
}

export default function ScreenHeader({
  headerTitle,
  headerBtnIconName,
  headerBtnSize,
  onHeaderBtnPress,
  headerBtnContainerStyle,
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
      <Text style={defaultStyles.headerTitle}>{headerTitle}</Text>
      <TouchableOpacity
        style={[styles.headerAddBtn, headerBtnContainerStyle]}
        onPress={onHeaderBtnPress}
      >
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
  headerAddBtn: {
    padding: 4,
  },
});

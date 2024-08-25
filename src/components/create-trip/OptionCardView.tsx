import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { Option } from "../../constants/options";
import COLORS from "../../constants/colors";
import { screenSize } from "../../constants/sizes";

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  option: Option;
  selected?: boolean;
}
export default function OptionCardView({
  option,
  containerStyle,
  onPress,
  selected = false,
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        containerStyle,
        selected && { borderWidth: 2, borderColor: COLORS.primary },
      ]}
      onPress={onPress}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{option.title}</Text>
        <Text style={styles.desc} numberOfLines={1}>
          {option.desc}
        </Text>
      </View>
      <Text
        style={[
          styles.icon,
          option.title === "Cheap" && { transform: [{ translateX: 8 }] },
        ]}
      >
        {option.icon}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light_gray,
    borderRadius: 14,
    paddingHorizontal: 22,
    height: screenSize.height < 700 ? 95 : 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 20,
  },
  titleContainer: { flexShrink: 1 },
  title: {
    fontFamily: "outfit-bold",
    fontSize: 20,
    color: COLORS.primary,
  },
  desc: {
    marginTop: 2,
    fontFamily: "outfit-regular",
    fontSize: screenSize.width < 380 ? 16 : 17,
    color: COLORS.gray,
  },
  icon: {
    fontSize: 38,
  },
});

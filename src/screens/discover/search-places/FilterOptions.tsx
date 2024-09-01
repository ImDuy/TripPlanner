import Octicons from "@expo/vector-icons/Octicons";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import Animated, { BounceIn } from "react-native-reanimated";
import COLORS from "../../../constants/colors";
import { DiscoverFilterOption } from "../../../utils/navigation-types";
interface Props {
  activeOption: DiscoverFilterOption;
  handleOptionChange: (option: DiscoverFilterOption) => void;
  containerStyle?: StyleProp<ViewStyle>;
}
const AnimatedIcon = Animated.createAnimatedComponent(Octicons);
const options: DiscoverFilterOption[] = ["All", "Places", "Hotels"];
export default function FilterOptions({
  handleOptionChange,
  activeOption,
  containerStyle,
}: Props) {
  const renderOptions = () =>
    options.map((option) => (
      <TouchableOpacity
        key={option}
        style={styles.rowContainer}
        onPress={() => handleOptionChange(option)}
      >
        {option === activeOption && (
          <AnimatedIcon
            name="dot-fill"
            size={12}
            color={COLORS.primary}
            entering={BounceIn}
            style={{ position: "absolute" }}
          />
        )}
        <Text
          style={[
            styles.optionText,
            { color: option === activeOption ? COLORS.primary : COLORS.gray },
          ]}
        >
          {option}
        </Text>
      </TouchableOpacity>
    ));

  return (
    <View style={[styles.container, containerStyle]}>{renderOptions()}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    paddingLeft: 10,
  },
  optionText: {
    fontFamily: "outfit-regular",
    fontSize: 16,
  },
});

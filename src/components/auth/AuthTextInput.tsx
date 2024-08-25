import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import COLORS from "../../constants/colors";
interface Props extends TextInputProps {
  title: string;
  isPassword?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}
export default function AuthTextInput({
  title,
  containerStyle,
  isPassword = false,
  value = "",
  ...textInputProps
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={containerStyle}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={`Enter ${title}`}
          placeholderTextColor={COLORS.gray}
          secureTextEntry={isPassword && !showPassword}
          value={value}
          {...textInputProps}
        />
        {isPassword && value.length > 0 && (
          <TouchableOpacity
            onPress={() => setShowPassword((prevState) => !prevState)}
          >
            <Entypo
              name={showPassword ? "eye" : "eye-with-line"}
              size={22}
              color={COLORS.primary}
              style={{ paddingLeft: 14 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "outfit-regular",
    color: COLORS.primary,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  input: {
    flex: 1,
    paddingVertical: 18,
    fontFamily: "outfit-regular",
    fontSize: 16,
  },
});

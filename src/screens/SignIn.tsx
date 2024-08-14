import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import defaultStyles from "../constants/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AuthTextInput from "../components/AuthTextInput";
import COLORS from "../constants/colors";
import AppButton from "../components/AppButton";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const { top, bottom } = useSafeAreaInsets();
  const navigation = useNavigation();
  const [signInInfo, setSignInInfo] = useState({ email: "", password: "" });

  const handleEmailTextChanged = (text: string) => {
    setSignInInfo({ ...signInInfo, email: text });
  };
  const handlePasswordTextChanged = (text: string) => {
    setSignInInfo({ ...signInInfo, password: text });
  };

  return (
    <View
      style={[styles.container, { paddingTop: top, paddingBottom: bottom }]}
    >
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Let's Sign You In</Text>
        <Text style={[styles.lightTile, { marginTop: 24 }]}>Welcome back</Text>
        <Text style={styles.lightTile}>You've been missed!</Text>
      </View>

      <View style={defaultStyles.container}>
        <AuthTextInput
          title="Email"
          textInputValue={signInInfo.email}
          onChangeText={handleEmailTextChanged}
        />
        <AuthTextInput
          title="Password"
          isPassword
          containerStyle={{ marginTop: 20 }}
          textInputValue={signInInfo.password}
          onChangeText={handlePasswordTextChanged}
        />
      </View>

      <View style={defaultStyles.container}>
        <AppButton label="Sign In" isFilled />
        <AppButton label="Create Account" containerStyle={{ marginTop: 20 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: COLORS.white,
  },
  sectionContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontFamily: "outfit-bold",
    color: COLORS.primary,
    fontSize: 30,
  },
  lightTile: {
    marginTop: 8,
    fontFamily: "outfit-regular",
    color: COLORS.gray,
    fontSize: 30,
  },
});

import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import defaultStyles from "../constants/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AuthTextInput from "../components/AuthTextInput";
import COLORS from "../constants/colors";
import AppButton from "../components/AppButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "../utils/navTypeCheck";
import { screenPadding } from "../constants/sizes";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SignIn() {
  const { top, bottom } = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const [signInInfo, setSignInInfo] = useState({ email: "", password: "" });

  const handleEmailTextChanged = (text: string) => {
    setSignInInfo((prevState) => {
      return { ...prevState, email: text };
    });
  };
  const handlePasswordTextChanged = (text: string) => {
    setSignInInfo((prevState) => {
      return { ...prevState, password: text };
    });
  };
  const handleSignUpNavigation = () => {
    navigation.navigate("SignUp");
  };
  const handleSignIn = () => {};

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        ...defaultStyles.screenContainer,
        paddingTop: top,
        paddingBottom: bottom,
      }}
      alwaysBounceVertical={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <Text style={defaultStyles.headerTitle}>Let's Sign You In</Text>
          <Text style={[styles.lightTile, { marginTop: 24 }]}>
            Welcome back
          </Text>
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
          <AppButton label="Sign In" isFilled onPress={handleSignIn} />
          <AppButton
            label="Create Account"
            containerStyle={{ marginTop: 20 }}
            onPress={handleSignUpNavigation}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: "center",
  },

  lightTile: {
    marginTop: 8,
    fontFamily: "outfit-regular",
    color: COLORS.gray,
    fontSize: 30,
  },
});

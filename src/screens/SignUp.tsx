import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "../utils/navTypeCheck";
import defaultStyles from "../constants/styles";
import AuthTextInput from "../components/AuthTextInput";
import AppButton from "../components/AppButton";

export default function SignUp() {
  const { top, bottom } = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const [signUpInfo, setSignUpInfo] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleFullNameTextChanged = (text: string) => {
    setSignUpInfo({ ...signUpInfo, fullName: text });
  };
  const handleEmailTextChanged = (text: string) => {
    setSignUpInfo({ ...signUpInfo, email: text });
  };
  const handlePasswordTextChanged = (text: string) => {
    setSignUpInfo({ ...signUpInfo, password: text });
  };
  const handleSignInNavigation = () => {
    navigation.navigate("SignIn");
  };
  const handleSignUp = () => {};

  return (
    <View
      style={{
        ...defaultStyles.screenContainer,
        paddingTop: top,
        paddingBottom: bottom,
      }}
    >
      <View style={styles.sectionContainer}>
        <Text style={defaultStyles.headerTitle}>Create New Account</Text>
      </View>

      <View style={{ flex: 3 }}>
        <AuthTextInput
          title="Full Name"
          textInputValue={signUpInfo.fullName}
          onChangeText={handleFullNameTextChanged}
        />
        <AuthTextInput
          title="Email"
          containerStyle={{ marginTop: 20 }}
          textInputValue={signUpInfo.email}
          onChangeText={handleEmailTextChanged}
        />
        <AuthTextInput
          title="Password"
          isPassword
          containerStyle={{ marginTop: 20 }}
          textInputValue={signUpInfo.password}
          onChangeText={handlePasswordTextChanged}
        />
      </View>

      <View style={{ flex: 2 }}>
        <AppButton label="Create Account" isFilled onPress={handleSignUp} />
        <AppButton
          label="Back to Sign In"
          containerStyle={{ marginTop: 20 }}
          onPress={handleSignInNavigation}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

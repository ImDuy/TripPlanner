import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Button, StyleSheet, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import COLORS from "../../../constants/colors";
import defaultStyles from "../../../constants/styles";
import { CreateTripContext } from "../../../context/CreateTripContext";
import { RootStackParamList } from "../../../utils/navigation-types";
export default function SearchPlace() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { tripData, setTripData } = useContext(CreateTripContext);

  return (
    <View style={defaultStyles.screenContainer}>
      <Button
        title="Navigate"
        onPress={() => navigation.navigate("SelectTravelers")}
      />
      {/* Search Bar */}
      <GooglePlacesAutocomplete
        placeholder="Search Places"
        textInputProps={{
          autoCorrect: false,
          autoCapitalize: "words",
        }}
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          setTripData({
            locationInfo: {
              name: data.description,
              coordinate: details?.geometry.location,
              // photoRef: details?.photos[0]?.photo_reference,
              url: details?.url,
            },
          });
          navigation.navigate("SelectTravelers");
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: "en",
        }}
        styles={{
          textInputContainer: styles.inputContainer,
          textInput: styles.input,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingTop: 3,
    paddingBottom: 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  input: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    fontFamily: "outfit-regular",
    fontSize: 18,
  },
});

import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import COLORS from "../../../constants/colors";
import defaultStyles from "../../../constants/styles";
import { CreateTripContext } from "../../../context/CreateTripContext";
import { RootStackParamList } from "../../../utils/navigation-types";

interface GooglePlaceDetailWithPhoto extends GooglePlaceDetail {
  photos: {
    photo_reference: string;
  }[];
}

export default function SearchPlace() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { setTripData } = useContext(CreateTripContext);

  return (
    <View style={defaultStyles.screenContainer}>
      <GooglePlacesAutocomplete
        placeholder="Search Places"
        textInputProps={{
          autoCorrect: false,
          autoCapitalize: "words",
        }}
        debounce={200}
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          setTripData((prevTripData) => {
            return {
              ...prevTripData,
              locationInfo: {
                name: data.description,
                coordinate: details?.geometry.location,
                photoRef: (details as GooglePlaceDetailWithPhoto)?.photos[0]
                  ?.photo_reference,
                url: details?.url,
              },
            };
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
        onFail={(error) => console.log("error: " + error)}
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

import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import defaultStyles from "../../../constants/styles";
import { SelectTravelerOptions } from "../../../constants/options";
import OptionCardView from "../../../components/create-trip/OptionCardView";
import AppButton from "../../../components/AppButton";
import { screenSize } from "../../../constants/sizes";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../utils/navigation-types";
import {
  CreateTripContext,
  TripData,
} from "../../../context/CreateTripContext";

export default function SelectTravelers() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [selectedOptionTitle, setSelectedOptionTitle] = useState("");
  const { setTripData } = useContext(CreateTripContext);

  const handleContinuePress = () => {
    setTripData((prevTripData: TripData) => {
      return {
        ...prevTripData,
        traveler: selectedOptionTitle,
      };
    });
    navigation.navigate("SelectDate");
  };

  const renderOptions = () => {
    return SelectTravelerOptions.map((option) => (
      <OptionCardView
        key={option.id}
        option={option}
        containerStyle={{ marginBottom: 18 }}
        onPress={() => setSelectedOptionTitle(option.title)}
        selected={selectedOptionTitle === option.title}
      />
    ));
  };

  return (
    <View style={defaultStyles.screenContainer}>
      <View style={{ flex: 1 }}>
        <Text style={defaultStyles.headerTitle}>Who's Traveling?</Text>
      </View>

      <View style={{ flex: 10, justifyContent: "center" }}>
        {screenSize.height > 700 && (
          <Text style={styles.sectionTitle}>Choose your travelers</Text>
        )}
        {renderOptions()}
      </View>

      <View style={{ flex: 2 }}>
        {selectedOptionTitle && (
          <AppButton
            label="Continue"
            labelStyle={{ fontSize: 18 }}
            isFilled
            onPress={handleContinuePress}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontFamily: "outfit-bold",
    fontSize: 22,
    marginBottom: 4,
  },
});

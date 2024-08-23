import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "../../../components/AppButton";
import OptionCardView from "../../../components/OptionCardView";
import { SelectBudgetOption } from "../../../constants/options";
import defaultStyles from "../../../constants/styles";
import { CreateTripContext } from "../../../context/CreateTripContext";
import { RootStackParamList } from "../../../utils/navigation-types";

export default function SelectBudget() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [selectedOptionTitle, setSelectedOptionTitle] = useState("");
  const { setTripData } = useContext(CreateTripContext);

  const handleContinuePress = () => {
    setTripData((prevTripData: any) => {
      return {
        ...prevTripData,
        budget: selectedOptionTitle,
      };
    });
    navigation.navigate("ReviewTrip");
  };
  const renderOptions = () => {
    return SelectBudgetOption.map((option) => (
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
        <Text style={defaultStyles.headerTitle}>Budget</Text>
      </View>

      <View style={{ flex: 6, justifyContent: "center" }}>
        <Text style={styles.sectionTitle}>Choose your spending habits</Text>
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
    fontSize: 21,
    marginBottom: 8,
  },
});

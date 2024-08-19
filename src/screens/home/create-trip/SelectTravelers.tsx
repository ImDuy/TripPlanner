import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import defaultStyles from "../../../constants/styles";
import { SelectTravelersList } from "../../../constants/options";
import OptionCardView from "../../../components/OptionCardView";
import AppButton from "../../../components/AppButton";
import { screenSize } from "../../../constants/sizes";

export default function SelectTravelers() {
  const [selectedOptionId, setSelectedOptionId] = useState(0);
  const renderOptions = () => {
    return SelectTravelersList.map((option) => (
      <OptionCardView
        key={option.id}
        option={option}
        containerStyle={{ marginBottom: 18 }}
        onPress={() => setSelectedOptionId(option.id)}
        selected={selectedOptionId === option.id}
      />
    ));
  };

  return (
    <View style={defaultStyles.screenContainer}>
      <View style={{ flex: 1 }}>
        <Text style={styles.header}>Who's Traveling?</Text>
      </View>

      <View style={{ flex: 10, justifyContent: "center" }}>
        {screenSize.height > 700 && (
          <Text style={styles.sectionTitle}>Choose your travelers</Text>
        )}
        {renderOptions()}
      </View>

      <View style={{ flex: 2 }}>
        {selectedOptionId > 0 && <AppButton label="Continue" isFilled />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontFamily: "outfit-bold",
    fontSize: 32,
  },
  sectionTitle: {
    fontFamily: "outfit-bold",
    fontSize: 22,
    marginBottom: 4,
  },
});

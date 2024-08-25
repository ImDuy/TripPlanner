import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "../../../components/AppButton";
import defaultStyles from "../../../constants/styles";
import { CreateTripContext } from "../../../context/CreateTripContext";
import { RootStackParamList } from "../../../utils/navigation-types";
import ReviewTripOption from "../../../components/create-trip/ReviewTripOption";
import { formatDate } from "../../../utils/helpers";

export default function ReviewTrip() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { tripData } = useContext(CreateTripContext);
  const reviewTripOptions = [
    {
      id: 1,
      title: "Destination",
      desc: tripData.locationInfo.name,
      icon: "📍",
    },
    {
      id: 2,
      title: "Travel Date",
      desc: `${formatDate(tripData.startDate)} - ${formatDate(
        tripData.endDate
      )} (${tripData.totalNumberOfDays} days)`,
      icon: "📅",
    },
    {
      id: 3,
      title: "Who Is Traveling",
      desc: tripData.traveler,
      icon: "🚌",
    },
    {
      id: 4,
      title: "Budget",
      desc: tripData.budget,
      icon: "💰",
    },
  ];

  const renderReviewTripOptions = () => {
    return reviewTripOptions.map((option) => {
      return (
        <ReviewTripOption
          key={option.id}
          option={option}
          containerStyle={{ marginBottom: 20 }}
        />
      );
    });
  };
  const handleBuildMyTrip = () => {
    navigation.navigate("CreateTrip");
  };
  return (
    <View style={defaultStyles.screenContainer}>
      <View style={{ flex: 2, justifyContent: "center" }}>
        <Text style={defaultStyles.headerTitle}>Review your trip</Text>
        <Text style={styles.sectionTitle}>
          Before generating your trip, please review your selection
        </Text>
      </View>

      <View style={{ flex: 5, justifyContent: "center" }}>
        {renderReviewTripOptions()}
      </View>

      <View style={{ flex: 2 }}>
        <AppButton
          label="Build My Trip"
          labelStyle={{ fontSize: 18 }}
          isFilled
          onPress={handleBuildMyTrip}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontFamily: "outfit-medium",
    fontSize: 21,
    marginTop: 12,
  },
});

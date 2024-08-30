import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import CalendarPicker, { ChangedDate } from "react-native-calendar-picker";
import defaultStyles from "../../../constants/styles";
import COLORS from "../../../constants/colors";
import AppButton from "../../../components/AppButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../utils/navigation-types";
import {
  CreateTripContext,
  TripData,
} from "../../../context/CreateTripContext";
import { numberOfDays } from "../../../utils/helpers";
import Toast from "react-native-root-toast";

let toast: any;
export default function SelectDate() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { setTripData } = useContext(CreateTripContext);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const onDateChange = (date: Date, type: ChangedDate) => {
    if (type === "START_DATE") setStartDate(date);
    else setEndDate(date);
  };
  const handleContinuePress = () => {
    if (!startDate || !endDate) {
      if (toast) Toast.hide(toast);
      toast = Toast.show("Please select both start date and end date");
      return;
    }
    const numOfDays = numberOfDays(startDate, endDate);
    setTripData((prevTripData: TripData) => {
      return {
        ...prevTripData,
        startDate,
        endDate,
        totalNumberOfDays: numOfDays,
      };
    });
    navigation.navigate("SelectBudget");
  };

  return (
    <View style={defaultStyles.screenContainer}>
      <View style={{ flex: 1 }}>
        <Text style={styles.header}>Travel Dates</Text>
      </View>

      <View style={{ flex: 3 }}>
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection
          minDate={new Date()} //only allows picking from current date
          maxRangeDuration={5}
          textStyle={{ fontFamily: "outfit-medium" }}
          selectedRangeStyle={{ backgroundColor: COLORS.primary }}
          //   todayBackgroundColor={COLORS.white}
          //   todayTextStyle={{ color: "black" }} //todayTextStyle not working
          selectedDayTextStyle={{ color: COLORS.white }}
        />
      </View>

      <View style={{ flex: 2 }}>
        <AppButton
          label="Continue"
          labelStyle={{ fontSize: 18 }}
          isFilled
          containerStyle={{ marginTop: 20 }}
          onPress={handleContinuePress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontFamily: "outfit-bold",
    fontSize: 32,
    marginTop: 20,
  },
});

import {
  FlatList,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from "react-native";
import React from "react";
import COLORS from "../../constants/colors";
import PlanItemCard from "./PlanItemCard";
interface Props {
  headerStyle: StyleProp<TextStyle>;
  plan: any[];
}
export default function PlanSection({ headerStyle, plan }: Props) {
  const renderPlanByDay = () =>
    plan.map((planByDay) => {
      return (
        <View key={planByDay.day} style={styles.planByDayContainer}>
          <Text style={styles.planByDayHeader}>{planByDay.day}</Text>
          <FlatList
            scrollEnabled={false}
            data={planByDay.activities}
            keyExtractor={(item) => item.geo_coordinates}
            renderItem={({ item }) => (
              <PlanItemCard
                name={item.activity}
                description={item.details}
                ticketPrice={item.ticket_pricing}
                travelTime={item.time}
              />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
          />
        </View>
      );
    });
  return (
    <View>
      <Text style={headerStyle}>⛺️ Plan Details</Text>
      {renderPlanByDay()}
    </View>
  );
}

const styles = StyleSheet.create({
  planByDayContainer: {
    marginTop: 20,
  },
  planByDayHeader: {
    color: COLORS.primary,
    fontFamily: "outfit-medium",
    fontSize: 20,
    alignSelf: "center",
  },
});

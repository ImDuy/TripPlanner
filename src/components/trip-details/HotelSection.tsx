import React from "react";
import { FlatList, StyleProp, Text, TextStyle, View } from "react-native";
import HotelItemCard from "./HotelItemCard";

interface Props {
  headerStyle: StyleProp<TextStyle>;
  hotelInfo: any[];
}
export default function HotelSection({ headerStyle, hotelInfo }: Props) {
  const handleHotelItemPress = (hotelItem: any) => {};
  return (
    <View>
      <Text style={headerStyle}>🏨 Hotel Recommendation</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={hotelInfo}
        keyExtractor={(item) => item.geo_coordinates}
        renderItem={({ item }) => (
          <HotelItemCard
            name={item.name}
            rating={item.rating}
            price={item.price}
            onItemPress={() => handleHotelItemPress(item)}
          />
        )}
      />
    </View>
  );
}

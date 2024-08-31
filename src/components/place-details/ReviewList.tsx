import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DiscoverReview } from "../../utils/types";
import RatingStars from "../RatingStars";
import Divider from "../Divider";
import COLORS from "../../constants/colors";

interface Props {
  reviewList: DiscoverReview[];
}
export default function ReviewList({ reviewList }: Props) {
  return (
    <FlatList
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      data={reviewList}
      renderItem={({ item }) => <ReviewItemView review={item} />}
      ItemSeparatorComponent={() => <Divider style={styles.dividerSpacing} />}
    />
  );
}

const ReviewItemView = ({ review }: { review: DiscoverReview }) => {
  const reviewLabels = ["Very Bad", "Bad", "Okay", "Good", "Amazing"];
  const rating = review.rating / 2;
  return (
    <>
      <View style={styles.itemHeaderContainer}>
        <Image source={review.author.avatar} style={styles.avatar} />
        <View style={styles.userInfoContainer}>
          <Text style={styles.username}>{review.author.username}</Text>
          <Text style={styles.reviewDate}>{review.date}</Text>
        </View>
        <View>
          <Text style={styles.reviewRatingLabel}>
            {reviewLabels[rating >= 5 ? 4 : Math.floor(rating)]}{" "}
            {rating.toFixed(1)}
          </Text>
          <RatingStars
            rating={rating}
            containerStyle={styles.ratingStarsContainer}
          />
        </View>
      </View>
      <Text style={styles.reviewText}>{review.text}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  dividerSpacing: {
    marginVertical: 24,
  },
  itemHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  userInfoContainer: {
    flex: 1,
  },
  username: {
    color: COLORS.primary,
    fontFamily: "outfit-bold",
    fontSize: 16,
  },
  reviewDate: {
    color: COLORS.gray,
    fontFamily: "outfit-regular",
    fontSize: 13,
  },
  reviewRatingLabel: {
    color: COLORS.primary,
    fontFamily: "outfit-regular",
    textAlign: "right",
  },
  ratingStarsContainer: {
    transform: [{ translateX: 4 }],
  },
  reviewText: {
    marginTop: 12,
    color: COLORS.primary,
    fontFamily: "outfit-regular",
  },
});

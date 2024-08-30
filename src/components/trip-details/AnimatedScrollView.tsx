import { useNavigation } from "@react-navigation/native";
import React, { ReactNode, useEffect } from "react";
import { ScrollViewProps, StyleSheet, Text } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import COLORS from "../../constants/colors";
import IMAGES from "../../constants/images";

interface Props extends ScrollViewProps {
  headerTitle?: string;
  thumbnailUrl?: string;
  children: ReactNode;
}
export default function AnimatedScrollView({
  thumbnailUrl,
  children,
  headerTitle,
  ...scrollViewProps
}: Props) {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();
  const aref = useAnimatedRef<Animated.ScrollView>();
  const yOffset = useScrollViewOffset(aref);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            yOffset.value,
            [-1000, 0],
            [-100, 0],
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            yOffset.value,
            [-3000, 0],
            [20, 1],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: yOffset.value > 250 ? 1 : 0,
    };
  });

  useEffect(() => {
    navigation.setOptions({
      headerBackground: () => (
        <Animated.View
          style={[styles.headerStyle, { paddingTop: top }, headerAnimatedStyle]}
        >
          <Text style={styles.headerTitle}>{headerTitle ?? ""}</Text>
        </Animated.View>
      ),
    });
  }, [navigation, headerAnimatedStyle, headerTitle, top]);

  return (
    <Animated.ScrollView ref={aref} {...scrollViewProps}>
      <Animated.Image
        source={
          thumbnailUrl
            ? {
                uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${thumbnailUrl}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
              }
            : IMAGES.default_trip_thumbnail
        }
        style={[imageAnimatedStyle, styles.backgroundImg]}
      />
      {children}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  backgroundImg: {
    height: 300,
  },
  headerStyle: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: COLORS.light_gray,
    borderBottomWidth: 3,
  },
  headerTitle: {
    color: COLORS.primary,
    fontSize: 18,
    fontFamily: "outfit-bold",
  },
});

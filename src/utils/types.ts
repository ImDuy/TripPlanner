import { Point } from "react-native-google-places-autocomplete";
import { TripData } from "../context/CreateTripContext";
import { Timestamp } from "firebase/firestore";

export type TripPlan = {
  aiTripData: any;
  docId: string;
  userId: string;
  userTripOption: FireStoreTripData;
};

type FireStoreTripData = {
  locationInfo: {
    name: string;
    coordinate?: Point;
    photoRef?: string;
    url?: string;
  };
  traveler: string;
  startDate: Timestamp;
  endDate: Timestamp;
  totalNumberOfDays: number;
  budget: string;
};

export type DiscoverPlace = {
  id: number;
  image: any;
  title: string;
  location: string;
  description: string;
  rating: number;
  reviews: DiscoverReview[];
  hotels: DiscoverHotel[];
};

export type DiscoverHotel = {
  id: number;
  title: string;
  image: any;
  location: string;
  rating: number;
  pricePerDay: string;
};

export type DiscoverReview = {
  id: number;
  date: string;
  author: DiscoverUser;
  rating: number;
  text: string;
};

export type DiscoverUser = {
  id: number;
  username: string;
  avatar: any;
};

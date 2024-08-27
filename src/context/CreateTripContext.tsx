import { createContext, ReactNode, useState } from "react";
import { Point } from "react-native-google-places-autocomplete";

export type TripData = {
  locationInfo: {
    name: string;
    coordinate?: Point;
    photoRef?: string;
    url?: string;
  };
  traveler: string;
  startDate: Date;
  endDate: Date;
  totalNumberOfDays: number;
  budget: string;
};
type TripDateContext = {
  tripData: TripData;
  setTripData: React.Dispatch<React.SetStateAction<TripData>>;
};
export const CreateTripContext = createContext<TripDateContext>(
  {} as TripDateContext
);
export const CreateTripProvider = ({ children }: { children: ReactNode }) => {
  const [tripData, setTripData] = useState<TripData>({} as TripData);
  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      {children}
    </CreateTripContext.Provider>
  );
};

import { createContext, ReactNode, useState } from "react";

export const CreateTripContext = createContext<any>({});
export const CreateTripProvider = ({ children }: { children: ReactNode }) => {
  const [tripData, setTripData] = useState([]);
  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      {children}
    </CreateTripContext.Provider>
  );
};

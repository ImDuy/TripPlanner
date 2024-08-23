export type Option = {
  id: number;
  title: string;
  desc: string;
  icon: string;
  // people: string;
};

export const SelectTravelerOptions = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveler in exploration",
    icon: "🚶‍♂️",
    // people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travelers in tandem",
    icon: "🥂",
    // people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun-loving advs",
    icon: "👨‍👩‍👧‍👦",
    // people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekers",
    icon: "⛵️",
    // people: "5 to 10 People",
  },
];

export const SelectBudgetOption = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💵 ", // Representation of the money icon
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰", // Representation of the money bag icon
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about cost",
    icon: "💸", // Representation of the money with wings icon
  },
];

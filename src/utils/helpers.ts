import { chatSession } from "./geminiAI-config";

export function numberOfDays(start: Date, end: Date) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  // Calculate the difference in milliseconds
  const differenceMs = Math.abs(end.getTime() - start.getTime());
  // Convert back to days
  const diffDays = Math.round(differenceMs / oneDay);
  return diffDays + 1;
}

export function formatDate(date: Date) {
  const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${date.getDate()} ${monthName[date.getMonth()]}`;
}

export async function generateAiTrip(
  location: string,
  numOfDays: number,
  traveler: string,
  budget: string
) {
  const AI_PROMPT = `Generate Travel Plan for Location: ${location}, for ${numOfDays} Days and ${
    numOfDays - 1
  } Night for ${traveler} with a ${budget} budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for ${numOfDays} days and ${
    numOfDays - 1
  } night with each day plan with best time to visit in JSON format.`;
  // console.log(AI_PROMPT);

  const result = await chatSession.sendMessage(AI_PROMPT);
  return JSON.parse(result.response.text());
}

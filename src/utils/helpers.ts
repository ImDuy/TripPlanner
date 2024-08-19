export function numberOfDays(start: Date, end: Date) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  // Calculate the difference in milliseconds
  const differenceMs = Math.abs(end.getTime() - start.getTime());
  // Convert back to days
  const diffDays = Math.round(differenceMs / oneDay);
  return diffDays + 1;
}

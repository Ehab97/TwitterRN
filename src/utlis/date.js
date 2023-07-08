export const getFormattedDate = (date) => {
  //   return `${year}-${formattedMonth}-${formattedDay}`;
  const newDate = new Date(date);
  console.log(newDate);
  if (!date) {
    return "";
  }
  return newDate.toISOString().split("T")[0];
};

export const getDateMinusDays = (date, days) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate() - days;

  return new Date(year, month, day);
};

export const checkDaysAgoDates = (date) => {
  const today = new Date(); // current date and time
  const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000); // 7 days ago
  const givenDate = new Date(date); // example date to compare

  const dateDiff = today.getTime() - givenDate.getTime(); // difference in milliseconds
  const daysDiff = dateDiff / 86400000; // difference in days

  if (daysDiff > 7) {
    console.log("The given date is more than 7 days ago");
  } else {
    console.log("The given date is less than or equal to 7 days ago");
  }
  return daysDiff > 7;
};
export function isDateMoreThanDaysAgo(date, days) {
  if (!date) return false;
  let today = new Date().getTime();
  let formattedDate = new Date(date).getTime();
  const dateDiff =today - formattedDate;
  const daysDiff = dateDiff / (24 * 60 * 60 * 1000);
  return daysDiff <= days;
}

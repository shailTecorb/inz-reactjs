export const formattedDate = (CDate) => {
  console.log("Date", CDate);
  let current_datetime = new Date(CDate);

  let formatted_date =
    current_datetime.getFullYear() +
    "-" +
    ("0" + (current_datetime.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + current_datetime.getDate()).slice(-2);
  return formatted_date;
  // function format(inputDate) {
  //   var date = new Date(inputDate);
  //   if (!isNaN(date.getTime())) {
  //     // Months use 0 index.
  //     return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
  //   }
  // }
};

export const  getLongMonthName = function (date) {
  const monthNames = [
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
  return monthNames[date.getMonth()];
};
export const  getLongWeekName = function (date) {
    const weekNames = [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ];
    return weekNames[date.getDay()];
  };
  

  export const convertToInternationalCurrencySystem =(labelValue)=> {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

    : Math.abs(Number(labelValue));

}
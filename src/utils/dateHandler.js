export const formatIsoDate = (isoDate, showTime = true) => {
  const formatMonth = (monthNumber) => {
    if (typeof monthNumber !== "number") return null;

    const formattedMonth =
      monthNumber < 9 ? `0${monthNumber + 1}` : monthNumber + 1;
    return formattedMonth;
  };

  const formatNumbersBelowTen = (number) => {
    if (typeof number !== "number") return null;

    const formattedNumber = number < 10 ? `0${number}` : number;
    return formattedNumber;
  };

  const date = new Date(isoDate);
  const timestampWithoutOffset =
    date.getTime() - date.getTimezoneOffset() * 60 * 1000;
  const dateWithoutOffset = new Date(timestampWithoutOffset);

  const publishedDate = `${formatNumbersBelowTen(
    dateWithoutOffset.getDate()
  )}-${formatMonth(
    dateWithoutOffset.getMonth()
  )}-${dateWithoutOffset.getFullYear()}`;

  const publishedTime = `${formatNumbersBelowTen(
    dateWithoutOffset.getHours()
  )}:${formatNumbersBelowTen(dateWithoutOffset.getMinutes())}`;

  if (showTime === true) {
    return `${publishedDate} ${publishedTime}`;
  } else {
    return publishedDate;
  }
};

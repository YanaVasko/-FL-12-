function isLeapYear(date) {
  let year = new Date(date).getFullYear();
  if (year % 4 === 0) {
    return `${year} is a leap year`;
  } else if (!year % 4 === 0) {
    return `${year} is not a leap year`;
  } else {
    return 'Invalid Date';
  }
}

isLeapYear();

const leapYears = function (year) {
  let result;
  if (
    ((year % 4 === 0) == true && (year % 100 === 0) == false) ||
    (year % 400 === 0) == true
  ) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

// Do not edit below this line
module.exports = leapYears;

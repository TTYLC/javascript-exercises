const removeFromArray = function (array, x) {
  let args = Array.from(arguments);
  args.shift();
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (args.includes(array[i])) {
      continue;
    }
    newArray.push(array[i]);
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

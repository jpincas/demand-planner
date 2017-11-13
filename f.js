function aggregateSales(rawData, window) {
  let collapsedData = [];
  let acc = 0;

  // starting the loop at 1 for semantic reasons
  // that way we aggregate exactly at the modulo of the counter and window
  // and we don't have to guard for zero which also produces a zero modulo
  for (var i = 1; i <= rawData.length; i++) {
    // remember to add the position of the counter - 1
    acc += rawData[i - 1];
    // check if we have reached the end of the window by looking for modulus 0
    // if we have, add the accumulated total to the list and reset the accumulator
    if (i % 7 == 0) {
      collapsedData.push(acc);
      acc = 0;
    }
  }

  return collapsedData;
}

var result = aggregateSales([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 7);

console.log(result);

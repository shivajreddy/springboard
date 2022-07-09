function addCommas(input) {
  // Null check
  if (input === "" || !input) return input;

  var inputString = `${input}`;
  var reverseList = [...inputString].reverse();

  const hasDecimal = reverseList.includes(".");
  var trail;
  if (hasDecimal) {
    const inputList = [...inputString];
    const idx = inputList.indexOf(".");
    const trailList = inputList.slice(idx, inputList.length);
    trail = trailList.join("");
    inputString = inputString.slice(0, idx);
    reverseList = [...inputString].reverse();
  }

  let negative;
  if (input < 0) {
    negative = true;
    reverseList.pop();
  }

  var result = "";
  var copy = "";
  var idx = 0;
  while (idx < reverseList.length) {
    result += reverseList[idx];
    copy += reverseList[idx];
    if (copy.length % 3 === 0) {
      result += ",";
    }
    idx += 1;
  }
  // remove trailing comma
  if (result[result.length - 1] === ",") {
    result = result.slice(0, -1);
  }

  var finalResult = [...result].reverse().join("");

  if (hasDecimal) {
    finalResult += trail;
  }

  if (negative) {
    return "-" + finalResult;
  }
  return finalResult;
}

addCommas(1234); //“1,234”
addCommas(100000000); //“1,000,000”
addCommas(9876543210); //“9,876,543,210”
addCommas(6); //  "6"
addCommas(-10); //  "-10"
addCommas(-5678); //  “-5,678”
addCommas(12345.678); //  “12,345.678”
addCommas(-3141592.65); //  “-3,141,592.65”

module.exports = addCommas;

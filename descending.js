descending = (num) => {
  let str = num.toString();
  let numArr = str.split("");
  numArr.sort(function (a, b) {
    return b - a;
  });
  reverseStr = numArr.join("");
  return +reverseStr;
};

console.log(descending(3654));

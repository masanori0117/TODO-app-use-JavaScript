const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲ないです";
};

console.log(checkSum(10, 200));

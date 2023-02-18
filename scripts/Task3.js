function funcIncome(num) {
  let a = num;
  return function (num2) {
    let b = num2;
    let sum = a + b;
    return sum;
  }
}
let outCome = funcIncome(2)
console.log(outCome(3));
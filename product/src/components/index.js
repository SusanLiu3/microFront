

export default function twoLargeNumberAdd(num1, num2) {
  let len1 = num1.length - 1
  let len2 = num2.length - 1
  let res = ''
  let flag = 0
  num1 = num1 + ''
  num2 = num2 + ''
  while (len1 >= 0 || len2 >= 0) {
    const a = num1[len1] - 0
    const b = num2[len2] - 0
    let sum = 0
    if (a) {
      sum += a
    }
    if (b) {
      sum += b
    }
    sum += flag
    if (sum >= 10) {
      flag = 1
      sum = sum - 10
    } else {
      flag = 0
    }
    res = '' + sum + res
    len1--
    len2--
  }
  if (flag) {
    res = '' + flag + res
  }
  return res
}

// console.log(twoLargeNumberAdd('9', '11'))

/**
 * 1：任何数和自身异或都是0
 * 2：任何数和0异或 是任何数本身
 * 3：异或操作满足交换律和结合律
 */

function singleNumber(arr = [2, 2, 1]) {

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result ^= arr[i]
  }

  return result
}
console.log(singleNumber()) // output: 1

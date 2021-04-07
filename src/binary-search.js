const dns = require('dns')

console.log(dns.getServers())



// const search = (arr = [1, 2, 3, 4, 5, 6, 7, 8, 9], target = 2) => {

// }


// // 二分查找有序数组 
// const search = (arr = [1, 2, 3, 4, 5, 6, 7, 8, 9], target = 2) => {
//     const mid = Math.floor(arr.length / 2)
//     console.log(arr, mid, target)
//     if (mid === target) {
//         return true
//     }

//     if (mid > target) {
//         // console.log(arr.slice(0, mid), target)
//         search(arr.slice(0, mid), target)

//     }

//     if (mid < target) {
//         search(arr.slice(mid, arr.length), target)
//     }
// }
// let res = search()

// console.log(res)

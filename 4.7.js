// 翻转字符串“algorithm”
// 关键: js字符串无法改变: Primitives are immutable  a[1]=2 收尾互换
function reverse(str = 'algorithm'){
    let newStr = str.split('')
    let pStartIdx;
    let pEndIdx;
    let midIdx = Math.floor(str.length / 2)
    for(let i = 0; i < str.length; i++){
        if(midIdx === i) break;
        pStartIdx = i
        pEndIdx = str.length - 1 - i
        let tmp = newStr[pStartIdx]
        newStr[pStartIdx] = newStr[pEndIdx]
        newStr[pEndIdx] = tmp
    }
    return newStr.join('')
}
// console.log(reverse())

// 数组
// 连续空间， 查询(n), 添加删除O(n)
// 给定两个字符串 s 和 t，编写一个函数来判断 t 是否是 s 的字母异位词。
function isContain(s="anagram", t="nagaram"){
    if(s.length !== t.length) return false

    // for()
}
console.log(isContain());

// 链表
// 添加删除O(1)


// bubble sort：22比较 最大的放到尾部 O(n2)
function bubbleSort(arr=[3,2,19,13]){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j<arr.length; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}
console.log(bubbleSort())

function insertionSort(){}
function mergeSort(){}
function quckSort(){}
function topologicalSort(){}


// 二叉树
let treeNodeds = [8,3,6,4,9,11,2,5,7]

// 翻转字符串“algorithm”
// 关键: js字符串无法改变: Primitives are immutable  a[1]=2 收尾互换
function reverse(str = "algorithm") {
    let newStr = str.split("");
    let pStartIdx;
    let pEndIdx;
    let midIdx = Math.floor(str.length / 2);
    for (let i = 0; i < str.length; i++) {
        if (midIdx === i) break;
        pStartIdx = i;
        pEndIdx = str.length - 1 - i;
        let tmp = newStr[pStartIdx];
        newStr[pStartIdx] = newStr[pEndIdx];
        newStr[pEndIdx] = tmp;
    }
    return newStr.join("");
}
// console.log(reverse())

// 数组
// 连续空间， 查询(n), 添加删除O(n)
// 给定两个字符串 s 和 t，编写一个函数来判断 t 是否是 s 的字母异位词。
// 利用hashtable 统计次数
function isContain(s = "anagram", t = "nagaram") {
    if (s.length !== t.length) return false;
    let obj1 = {};

    s.split("").forEach((v) => {
        if (v in obj1) {
            obj1[v] = ++obj1[v];
        } else {
            obj1[v] = 0;
        }
    });

    let arr2 = t.split("");

    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] in obj1) {
            obj1[arr2[i]] = --obj1[arr2[i]];
            if (obj1[arr2] < 0) return false;
        } else {
            return false;
        }
    }

    // console.log(obj1);
    // console.log(obj2)
    return true;
    // for()
}
console.log(isContain());

// 链表
// 添加删除O(1)
// 链表的翻转
class LinkListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null;
    }

    insert(val) {
        if (this.head === null) {
            this.head = new LinkListNode(val);
        } else {
            let current = this.head;
            while (current) {
                if (current.next === null) {
                    current.next = new LinkListNode(val);
                    break;
                }

                current = current.next;
            }
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    reverse(){
        let head = this.head
        // 没有节点 或者只有1个节点 不翻转
        if(!head || !head.next) return head
        // 前一个节点
        let pre = null;
        // 当前节点
        let current = head;
        // 后一个节点
        let next;
        while(current){
            // 下一个节点存起来
            next = current.next  // 2存起来
            // 指向上一个节点存起来
            current.next = pre  // 下一个指向 前一个 
            pre = current // 前一个
            
            // 遍历下一个
            current = next
        }
        console.log(pre)
        return pre
    }

}

let linkList = new LinkList();
linkList.insert(1);
linkList.insert(2);
linkList.insert(3);
linkList.print();
linkList.reverse()
linkList.print()

// 寻找倒数第k个元素、寻找链表中间位置的元素、判断链表是否有环

// 构建一个虚假的链表头

// bubble sort：22比较 最大的放到尾部 O(n2)
function bubbleSort(arr = [3, 2, 19, 13]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
console.log(bubbleSort());

function insertionSort() {}
function mergeSort() {}
function quckSort() {}
function topologicalSort() {}

// 二叉树
let treeNodeds = [8, 3, 6, 4, 9, 11, 2, 5, 7];

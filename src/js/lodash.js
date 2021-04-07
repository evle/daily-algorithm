let obj = {
    a: {
        b: 1,
    },
    arr: [1, 2, { item: { text: "abc" } }],
};

// 关键点： 转换路径
function get(obj, path) {
    if (
        typeof obj !== "object" ||
        typeof path !== "string" ||
        typeof path.length < 1
    )
        return undefined;

    let pathArr = path.replace(/\[(\w+)\]/g, ".$1").split(".");
    let val = obj;

    for (let el of pathArr) {
        if (val !== null && val.hasOwnProperty(el)) {
            val = val[el];
        } else {
            return undefined;
        }
    }

    return val;
}

// console.log(get(obj, "arr[2][item][text]"));


// Math.random() 0~1之间的数字  *3 0-3之间数字
// sort: 默认按照字母排序， 升降需要提供比较函 <0升序   >0降序
// sort .5-Math.random()不准的原因: 插入排序和快排序算法没有机会比较每个元素
// 关键: 从最后一个开始换，产生随机位置(换过的位置不产生)
function shuffle(arr){
    let index = arr.length -1

    while(index){
        let tmp = arr[index]
        let randomIndex = Math.floor(Math.random() * index)
        arr[index] = arr[randomIndex]
        arr[randomIndex] = tmp
        index--
    }

    return arr
}
let arr1 = [1,2,3,4,5,6,7,8,9]
console.log(shuffle(arr1))


function merge(){

}

function unique(){

}

// const arr = [1, [2, [3, [4, 5]]], 6];
function flatten(arr= [1, [2, [3, [4, 5]]], 6]){
    
}
console.log(flatten())

function isPlainObject(){
    
}

function debounce(){

}

function throttle(){
    
}


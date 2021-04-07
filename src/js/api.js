// 取消网络请求
// 根据发送网络请求的API不同，取消方法不同

// xhr
// fetch
// axios
// 如果使用XMLHttpRequest发送请求可以使用XMLHttpRequest.abort()

// 如果使用fetch发送请求可以使用AbortController

// const controller = new AbortController();
// const signal = controller.signal;
// fetch('https://somewhere', { signal })
// controller.abort()
// 如果使用axios，取消原理同fetch

// var CancelToken = axios.CancelToken;
// var source = CancelToken.source();

// axios.get('/https://somewhere', {
//   cancelToken: source.token
// }

// source.cancel()


// cally apply bind 

// new

// 继承

// 原型链


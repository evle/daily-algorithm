/**
 * @description
 *  dequeue
 *  enqueue
 *  peek: returning the value of the front element without dequeuing it
 */
class Queue {
    constructor() {
        this.queue = []
    }

    isEmpty() {
        return this.queue.length === 0
    }

    dequeue() {
        const removedElement = this.queue.shift() 
        return removedElement ? removedElement : null
    }

    enqueue(element) {
        this.queue.push(element)
        return this.queue
    }

    peek() {
        return this.queue.length > 0 ? this.queue[0] : null
    }

    toString(){
        return this.queue.join(',')
    }
}

module.exports = Queue